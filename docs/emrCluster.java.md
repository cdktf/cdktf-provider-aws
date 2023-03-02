# `emrCluster` Submodule <a name="`emrCluster` Submodule" id="@cdktf/provider-aws.emrCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrCluster <a name="EmrCluster" id="@cdktf/provider-aws.emrCluster.EmrCluster"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster aws_emr_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrCluster;

EmrCluster.Builder.create(Construct scope, java.lang.String id)
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
    .releaseLabel(java.lang.String)
    .serviceRole(java.lang.String)
//  .additionalInfo(java.lang.String)
//  .applications(java.util.List<java.lang.String>)
//  .autoscalingRole(java.lang.String)
//  .autoTerminationPolicy(EmrClusterAutoTerminationPolicy)
//  .bootstrapAction(IResolvable)
//  .bootstrapAction(java.util.List<EmrClusterBootstrapAction>)
//  .configurations(java.lang.String)
//  .configurationsJson(java.lang.String)
//  .coreInstanceFleet(EmrClusterCoreInstanceFleet)
//  .coreInstanceGroup(EmrClusterCoreInstanceGroup)
//  .customAmiId(java.lang.String)
//  .ebsRootVolumeSize(java.lang.Number)
//  .ec2Attributes(EmrClusterEc2Attributes)
//  .id(java.lang.String)
//  .keepJobFlowAliveWhenNoSteps(java.lang.Boolean)
//  .keepJobFlowAliveWhenNoSteps(IResolvable)
//  .kerberosAttributes(EmrClusterKerberosAttributes)
//  .listStepsStates(java.util.List<java.lang.String>)
//  .logEncryptionKmsKeyId(java.lang.String)
//  .logUri(java.lang.String)
//  .masterInstanceFleet(EmrClusterMasterInstanceFleet)
//  .masterInstanceGroup(EmrClusterMasterInstanceGroup)
//  .scaleDownBehavior(java.lang.String)
//  .securityConfiguration(java.lang.String)
//  .step(IResolvable)
//  .step(java.util.List<EmrClusterStep>)
//  .stepConcurrencyLevel(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
//  .visibleToAllUsers(java.lang.Boolean)
//  .visibleToAllUsers(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoscalingRole">autoscalingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoTerminationPolicy">autoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.bootstrapAction">bootstrapAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>></code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurations">configurations</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurationsJson">configurationsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceFleet">coreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceGroup">coreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ec2Attributes">ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.keepJobFlowAliveWhenNoSteps">keepJobFlowAliveWhenNoSteps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.kerberosAttributes">kerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.listStepsStates">listStepsStates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logEncryptionKmsKeyId">logEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceFleet">masterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceGroup">masterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scaleDownBehavior">scaleDownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.stepConcurrencyLevel">stepConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.releaseLabel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.serviceRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.additionalInfo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.applications"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `autoscalingRole`<sup>Optional</sup> <a name="autoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoscalingRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `autoTerminationPolicy`<sup>Optional</sup> <a name="autoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.autoTerminationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `bootstrapAction`<sup>Optional</sup> <a name="bootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.bootstrapAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>>

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurations"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `configurationsJson`<sup>Optional</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.configurationsJson"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `coreInstanceFleet`<sup>Optional</sup> <a name="coreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceFleet"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `coreInstanceGroup`<sup>Optional</sup> <a name="coreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.coreInstanceGroup"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.customAmiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ebsRootVolumeSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `ec2Attributes`<sup>Optional</sup> <a name="ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.ec2Attributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepJobFlowAliveWhenNoSteps`<sup>Optional</sup> <a name="keepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.keepJobFlowAliveWhenNoSteps"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `kerberosAttributes`<sup>Optional</sup> <a name="kerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.kerberosAttributes"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `listStepsStates`<sup>Optional</sup> <a name="listStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.listStepsStates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `logEncryptionKmsKeyId`<sup>Optional</sup> <a name="logEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logEncryptionKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.logUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `masterInstanceFleet`<sup>Optional</sup> <a name="masterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceFleet"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `masterInstanceGroup`<sup>Optional</sup> <a name="masterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.masterInstanceGroup"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `scaleDownBehavior`<sup>Optional</sup> <a name="scaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.scaleDownBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.securityConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.step"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `stepConcurrencyLevel`<sup>Optional</sup> <a name="stepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.stepConcurrencyLevel"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.terminationProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.Initializer.parameter.visibleToAllUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy">putAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction">putBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet">putCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup">putCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes">putEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes">putKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet">putMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup">putMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.putStep">putStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo">resetAdditionalInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications">resetApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole">resetAutoscalingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy">resetAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction">resetBootstrapAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson">resetConfigurationsJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet">resetCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup">resetCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId">resetCustomAmiId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize">resetEbsRootVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes">resetEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps">resetKeepJobFlowAliveWhenNoSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes">resetKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates">resetListStepsStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId">resetLogEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet">resetMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup">resetMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior">resetScaleDownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStep">resetStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel">resetStepConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection">resetTerminationProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers">resetVisibleToAllUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.emrCluster.EmrCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoTerminationPolicy` <a name="putAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy"></a>

```java
public void putAutoTerminationPolicy(EmrClusterAutoTerminationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putAutoTerminationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `putBootstrapAction` <a name="putBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction"></a>

```java
public void putBootstrapAction(IResolvable OR java.util.List<EmrClusterBootstrapAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putBootstrapAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>>

---

##### `putCoreInstanceFleet` <a name="putCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet"></a>

```java
public void putCoreInstanceFleet(EmrClusterCoreInstanceFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `putCoreInstanceGroup` <a name="putCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup"></a>

```java
public void putCoreInstanceGroup(EmrClusterCoreInstanceGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putCoreInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `putEc2Attributes` <a name="putEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes"></a>

```java
public void putEc2Attributes(EmrClusterEc2Attributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putEc2Attributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `putKerberosAttributes` <a name="putKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes"></a>

```java
public void putKerberosAttributes(EmrClusterKerberosAttributes value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putKerberosAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `putMasterInstanceFleet` <a name="putMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet"></a>

```java
public void putMasterInstanceFleet(EmrClusterMasterInstanceFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `putMasterInstanceGroup` <a name="putMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup"></a>

```java
public void putMasterInstanceGroup(EmrClusterMasterInstanceGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putMasterInstanceGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `putStep` <a name="putStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep"></a>

```java
public void putStep(IResolvable OR java.util.List<EmrClusterStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrCluster.putStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>>

---

##### `resetAdditionalInfo` <a name="resetAdditionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAdditionalInfo"></a>

```java
public void resetAdditionalInfo()
```

##### `resetApplications` <a name="resetApplications" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetApplications"></a>

```java
public void resetApplications()
```

##### `resetAutoscalingRole` <a name="resetAutoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoscalingRole"></a>

```java
public void resetAutoscalingRole()
```

##### `resetAutoTerminationPolicy` <a name="resetAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetAutoTerminationPolicy"></a>

```java
public void resetAutoTerminationPolicy()
```

##### `resetBootstrapAction` <a name="resetBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetBootstrapAction"></a>

```java
public void resetBootstrapAction()
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetConfigurationsJson` <a name="resetConfigurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetConfigurationsJson"></a>

```java
public void resetConfigurationsJson()
```

##### `resetCoreInstanceFleet` <a name="resetCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceFleet"></a>

```java
public void resetCoreInstanceFleet()
```

##### `resetCoreInstanceGroup` <a name="resetCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCoreInstanceGroup"></a>

```java
public void resetCoreInstanceGroup()
```

##### `resetCustomAmiId` <a name="resetCustomAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetCustomAmiId"></a>

```java
public void resetCustomAmiId()
```

##### `resetEbsRootVolumeSize` <a name="resetEbsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEbsRootVolumeSize"></a>

```java
public void resetEbsRootVolumeSize()
```

##### `resetEc2Attributes` <a name="resetEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetEc2Attributes"></a>

```java
public void resetEc2Attributes()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetId"></a>

```java
public void resetId()
```

##### `resetKeepJobFlowAliveWhenNoSteps` <a name="resetKeepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKeepJobFlowAliveWhenNoSteps"></a>

```java
public void resetKeepJobFlowAliveWhenNoSteps()
```

##### `resetKerberosAttributes` <a name="resetKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetKerberosAttributes"></a>

```java
public void resetKerberosAttributes()
```

##### `resetListStepsStates` <a name="resetListStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetListStepsStates"></a>

```java
public void resetListStepsStates()
```

##### `resetLogEncryptionKmsKeyId` <a name="resetLogEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogEncryptionKmsKeyId"></a>

```java
public void resetLogEncryptionKmsKeyId()
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetLogUri"></a>

```java
public void resetLogUri()
```

##### `resetMasterInstanceFleet` <a name="resetMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceFleet"></a>

```java
public void resetMasterInstanceFleet()
```

##### `resetMasterInstanceGroup` <a name="resetMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetMasterInstanceGroup"></a>

```java
public void resetMasterInstanceGroup()
```

##### `resetScaleDownBehavior` <a name="resetScaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetScaleDownBehavior"></a>

```java
public void resetScaleDownBehavior()
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetSecurityConfiguration"></a>

```java
public void resetSecurityConfiguration()
```

##### `resetStep` <a name="resetStep" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStep"></a>

```java
public void resetStep()
```

##### `resetStepConcurrencyLevel` <a name="resetStepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetStepConcurrencyLevel"></a>

```java
public void resetStepConcurrencyLevel()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTerminationProtection` <a name="resetTerminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetTerminationProtection"></a>

```java
public void resetTerminationProtection()
```

##### `resetVisibleToAllUsers` <a name="resetVisibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.resetVisibleToAllUsers"></a>

```java
public void resetVisibleToAllUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrCluster;

EmrCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrCluster;

EmrCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrCluster;

EmrCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.emrCluster.EmrCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy">autoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction">bootstrapAction</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState">clusterState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet">coreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup">coreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes">ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes">kerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet">masterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup">masterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns">masterPublicDns</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.step">step</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput">additionalInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput">applicationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput">autoscalingRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput">autoTerminationPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput">bootstrapActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput">configurationsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput">configurationsJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput">coreInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput">coreInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput">customAmiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput">ebsRootVolumeSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput">ec2AttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput">keepJobFlowAliveWhenNoStepsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput">kerberosAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput">listStepsStatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput">logEncryptionKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput">masterInstanceFleetInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput">masterInstanceGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput">releaseLabelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput">scaleDownBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput">serviceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput">stepConcurrencyLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput">stepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput">terminationProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput">visibleToAllUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole">autoscalingRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations">configurations</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson">configurationsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps">keepJobFlowAliveWhenNoSteps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates">listStepsStates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId">logEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior">scaleDownBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel">stepConcurrencyLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoTerminationPolicy`<sup>Required</sup> <a name="autoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicy"></a>

```java
public EmrClusterAutoTerminationPolicyOutputReference getAutoTerminationPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference">EmrClusterAutoTerminationPolicyOutputReference</a>

---

##### `bootstrapAction`<sup>Required</sup> <a name="bootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapAction"></a>

```java
public EmrClusterBootstrapActionList getBootstrapAction();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList">EmrClusterBootstrapActionList</a>

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.clusterState"></a>

```java
public java.lang.String getClusterState();
```

- *Type:* java.lang.String

---

##### `coreInstanceFleet`<sup>Required</sup> <a name="coreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleet"></a>

```java
public EmrClusterCoreInstanceFleetOutputReference getCoreInstanceFleet();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference">EmrClusterCoreInstanceFleetOutputReference</a>

---

##### `coreInstanceGroup`<sup>Required</sup> <a name="coreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroup"></a>

```java
public EmrClusterCoreInstanceGroupOutputReference getCoreInstanceGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference">EmrClusterCoreInstanceGroupOutputReference</a>

---

##### `ec2Attributes`<sup>Required</sup> <a name="ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2Attributes"></a>

```java
public EmrClusterEc2AttributesOutputReference getEc2Attributes();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference">EmrClusterEc2AttributesOutputReference</a>

---

##### `kerberosAttributes`<sup>Required</sup> <a name="kerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributes"></a>

```java
public EmrClusterKerberosAttributesOutputReference getKerberosAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference">EmrClusterKerberosAttributesOutputReference</a>

---

##### `masterInstanceFleet`<sup>Required</sup> <a name="masterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleet"></a>

```java
public EmrClusterMasterInstanceFleetOutputReference getMasterInstanceFleet();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference">EmrClusterMasterInstanceFleetOutputReference</a>

---

##### `masterInstanceGroup`<sup>Required</sup> <a name="masterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroup"></a>

```java
public EmrClusterMasterInstanceGroupOutputReference getMasterInstanceGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference">EmrClusterMasterInstanceGroupOutputReference</a>

---

##### `masterPublicDns`<sup>Required</sup> <a name="masterPublicDns" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterPublicDns"></a>

```java
public java.lang.String getMasterPublicDns();
```

- *Type:* java.lang.String

---

##### `step`<sup>Required</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.step"></a>

```java
public EmrClusterStepList getStep();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList">EmrClusterStepList</a>

---

##### `additionalInfoInput`<sup>Optional</sup> <a name="additionalInfoInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfoInput"></a>

```java
public java.lang.String getAdditionalInfoInput();
```

- *Type:* java.lang.String

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applicationsInput"></a>

```java
public java.util.List<java.lang.String> getApplicationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingRoleInput`<sup>Optional</sup> <a name="autoscalingRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRoleInput"></a>

```java
public java.lang.String getAutoscalingRoleInput();
```

- *Type:* java.lang.String

---

##### `autoTerminationPolicyInput`<sup>Optional</sup> <a name="autoTerminationPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoTerminationPolicyInput"></a>

```java
public EmrClusterAutoTerminationPolicy getAutoTerminationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---

##### `bootstrapActionInput`<sup>Optional</sup> <a name="bootstrapActionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.bootstrapActionInput"></a>

```java
public java.lang.Object getBootstrapActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>>

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsInput"></a>

```java
public java.lang.String getConfigurationsInput();
```

- *Type:* java.lang.String

---

##### `configurationsJsonInput`<sup>Optional</sup> <a name="configurationsJsonInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJsonInput"></a>

```java
public java.lang.String getConfigurationsJsonInput();
```

- *Type:* java.lang.String

---

##### `coreInstanceFleetInput`<sup>Optional</sup> <a name="coreInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceFleetInput"></a>

```java
public EmrClusterCoreInstanceFleet getCoreInstanceFleetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---

##### `coreInstanceGroupInput`<sup>Optional</sup> <a name="coreInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.coreInstanceGroupInput"></a>

```java
public EmrClusterCoreInstanceGroup getCoreInstanceGroupInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---

##### `customAmiIdInput`<sup>Optional</sup> <a name="customAmiIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiIdInput"></a>

```java
public java.lang.String getCustomAmiIdInput();
```

- *Type:* java.lang.String

---

##### `ebsRootVolumeSizeInput`<sup>Optional</sup> <a name="ebsRootVolumeSizeInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSizeInput"></a>

```java
public java.lang.Number getEbsRootVolumeSizeInput();
```

- *Type:* java.lang.Number

---

##### `ec2AttributesInput`<sup>Optional</sup> <a name="ec2AttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ec2AttributesInput"></a>

```java
public EmrClusterEc2Attributes getEc2AttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keepJobFlowAliveWhenNoStepsInput`<sup>Optional</sup> <a name="keepJobFlowAliveWhenNoStepsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoStepsInput"></a>

```java
public java.lang.Object getKeepJobFlowAliveWhenNoStepsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `kerberosAttributesInput`<sup>Optional</sup> <a name="kerberosAttributesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.kerberosAttributesInput"></a>

```java
public EmrClusterKerberosAttributes getKerberosAttributesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---

##### `listStepsStatesInput`<sup>Optional</sup> <a name="listStepsStatesInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStatesInput"></a>

```java
public java.util.List<java.lang.String> getListStepsStatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="logEncryptionKmsKeyIdInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyIdInput"></a>

```java
public java.lang.String getLogEncryptionKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `masterInstanceFleetInput`<sup>Optional</sup> <a name="masterInstanceFleetInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceFleetInput"></a>

```java
public EmrClusterMasterInstanceFleet getMasterInstanceFleetInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---

##### `masterInstanceGroupInput`<sup>Optional</sup> <a name="masterInstanceGroupInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.masterInstanceGroupInput"></a>

```java
public EmrClusterMasterInstanceGroup getMasterInstanceGroupInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `releaseLabelInput`<sup>Optional</sup> <a name="releaseLabelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabelInput"></a>

```java
public java.lang.String getReleaseLabelInput();
```

- *Type:* java.lang.String

---

##### `scaleDownBehaviorInput`<sup>Optional</sup> <a name="scaleDownBehaviorInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehaviorInput"></a>

```java
public java.lang.String getScaleDownBehaviorInput();
```

- *Type:* java.lang.String

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfigurationInput"></a>

```java
public java.lang.String getSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRoleInput"></a>

```java
public java.lang.String getServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `stepConcurrencyLevelInput`<sup>Optional</sup> <a name="stepConcurrencyLevelInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevelInput"></a>

```java
public java.lang.Number getStepConcurrencyLevelInput();
```

- *Type:* java.lang.Number

---

##### `stepInput`<sup>Optional</sup> <a name="stepInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepInput"></a>

```java
public java.lang.Object getStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationProtectionInput`<sup>Optional</sup> <a name="terminationProtectionInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtectionInput"></a>

```java
public java.lang.Object getTerminationProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToAllUsersInput`<sup>Optional</sup> <a name="visibleToAllUsersInput" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsersInput"></a>

```java
public java.lang.Object getVisibleToAllUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `additionalInfo`<sup>Required</sup> <a name="additionalInfo" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.applications"></a>

```java
public java.util.List<java.lang.String> getApplications();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoscalingRole`<sup>Required</sup> <a name="autoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.autoscalingRole"></a>

```java
public java.lang.String getAutoscalingRole();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurations"></a>

```java
public java.lang.String getConfigurations();
```

- *Type:* java.lang.String

---

##### `configurationsJson`<sup>Required</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.configurationsJson"></a>

```java
public java.lang.String getConfigurationsJson();
```

- *Type:* java.lang.String

---

##### `customAmiId`<sup>Required</sup> <a name="customAmiId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.customAmiId"></a>

```java
public java.lang.String getCustomAmiId();
```

- *Type:* java.lang.String

---

##### `ebsRootVolumeSize`<sup>Required</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.ebsRootVolumeSize"></a>

```java
public java.lang.Number getEbsRootVolumeSize();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keepJobFlowAliveWhenNoSteps`<sup>Required</sup> <a name="keepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.keepJobFlowAliveWhenNoSteps"></a>

```java
public java.lang.Object getKeepJobFlowAliveWhenNoSteps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `listStepsStates`<sup>Required</sup> <a name="listStepsStates" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.listStepsStates"></a>

```java
public java.util.List<java.lang.String> getListStepsStates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `logEncryptionKmsKeyId`<sup>Required</sup> <a name="logEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logEncryptionKmsKeyId"></a>

```java
public java.lang.String getLogEncryptionKmsKeyId();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

---

##### `scaleDownBehavior`<sup>Required</sup> <a name="scaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.scaleDownBehavior"></a>

```java
public java.lang.String getScaleDownBehavior();
```

- *Type:* java.lang.String

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `stepConcurrencyLevel`<sup>Required</sup> <a name="stepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.stepConcurrencyLevel"></a>

```java
public java.lang.Number getStepConcurrencyLevel();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `terminationProtection`<sup>Required</sup> <a name="terminationProtection" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `visibleToAllUsers`<sup>Required</sup> <a name="visibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.visibleToAllUsers"></a>

```java
public java.lang.Object getVisibleToAllUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.emrCluster.EmrCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmrClusterAutoTerminationPolicy <a name="EmrClusterAutoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterAutoTerminationPolicy;

EmrClusterAutoTerminationPolicy.builder()
//  .idleTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#idle_timeout EmrCluster#idle_timeout}.

---

### EmrClusterBootstrapAction <a name="EmrClusterBootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterBootstrapAction;

EmrClusterBootstrapAction.builder()
    .name(java.lang.String)
    .path(java.lang.String)
//  .args(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#path EmrCluster#path}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

### EmrClusterConfig <a name="EmrClusterConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterConfig;

EmrClusterConfig.builder()
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
    .releaseLabel(java.lang.String)
    .serviceRole(java.lang.String)
//  .additionalInfo(java.lang.String)
//  .applications(java.util.List<java.lang.String>)
//  .autoscalingRole(java.lang.String)
//  .autoTerminationPolicy(EmrClusterAutoTerminationPolicy)
//  .bootstrapAction(IResolvable)
//  .bootstrapAction(java.util.List<EmrClusterBootstrapAction>)
//  .configurations(java.lang.String)
//  .configurationsJson(java.lang.String)
//  .coreInstanceFleet(EmrClusterCoreInstanceFleet)
//  .coreInstanceGroup(EmrClusterCoreInstanceGroup)
//  .customAmiId(java.lang.String)
//  .ebsRootVolumeSize(java.lang.Number)
//  .ec2Attributes(EmrClusterEc2Attributes)
//  .id(java.lang.String)
//  .keepJobFlowAliveWhenNoSteps(java.lang.Boolean)
//  .keepJobFlowAliveWhenNoSteps(IResolvable)
//  .kerberosAttributes(EmrClusterKerberosAttributes)
//  .listStepsStates(java.util.List<java.lang.String>)
//  .logEncryptionKmsKeyId(java.lang.String)
//  .logUri(java.lang.String)
//  .masterInstanceFleet(EmrClusterMasterInstanceFleet)
//  .masterInstanceGroup(EmrClusterMasterInstanceGroup)
//  .scaleDownBehavior(java.lang.String)
//  .securityConfiguration(java.lang.String)
//  .step(IResolvable)
//  .step(java.util.List<EmrClusterStep>)
//  .stepConcurrencyLevel(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .terminationProtection(java.lang.Boolean)
//  .terminationProtection(IResolvable)
//  .visibleToAllUsers(java.lang.Boolean)
//  .visibleToAllUsers(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel">releaseLabel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo">additionalInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications">applications</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole">autoscalingRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy">autoTerminationPolicy</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | auto_termination_policy block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction">bootstrapAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>></code> | bootstrap_action block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations">configurations</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson">configurationsJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet">coreInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | core_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup">coreInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | core_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId">customAmiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize">ebsRootVolumeSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes">ec2Attributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | ec2_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps">keepJobFlowAliveWhenNoSteps</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes">kerberosAttributes</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | kerberos_attributes block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates">listStepsStates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId">logEncryptionKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet">masterInstanceFleet</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | master_instance_fleet block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup">masterInstanceGroup</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | master_instance_group block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior">scaleDownBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step">step</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel">stepConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection">terminationProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers">visibleToAllUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `releaseLabel`<sup>Required</sup> <a name="releaseLabel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.releaseLabel"></a>

```java
public java.lang.String getReleaseLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#release_label EmrCluster#release_label}.

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_role EmrCluster#service_role}.

---

##### `additionalInfo`<sup>Optional</sup> <a name="additionalInfo" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.additionalInfo"></a>

```java
public java.lang.String getAdditionalInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_info EmrCluster#additional_info}.

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.applications"></a>

```java
public java.util.List<java.lang.String> getApplications();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#applications EmrCluster#applications}.

---

##### `autoscalingRole`<sup>Optional</sup> <a name="autoscalingRole" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoscalingRole"></a>

```java
public java.lang.String getAutoscalingRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_role EmrCluster#autoscaling_role}.

---

##### `autoTerminationPolicy`<sup>Optional</sup> <a name="autoTerminationPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.autoTerminationPolicy"></a>

```java
public EmrClusterAutoTerminationPolicy getAutoTerminationPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

auto_termination_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#auto_termination_policy EmrCluster#auto_termination_policy}

---

##### `bootstrapAction`<sup>Optional</sup> <a name="bootstrapAction" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.bootstrapAction"></a>

```java
public java.lang.Object getBootstrapAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>>

bootstrap_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bootstrap_action EmrCluster#bootstrap_action}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurations"></a>

```java
public java.lang.String getConfigurations();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}.

---

##### `configurationsJson`<sup>Optional</sup> <a name="configurationsJson" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.configurationsJson"></a>

```java
public java.lang.String getConfigurationsJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations_json EmrCluster#configurations_json}.

---

##### `coreInstanceFleet`<sup>Optional</sup> <a name="coreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceFleet"></a>

```java
public EmrClusterCoreInstanceFleet getCoreInstanceFleet();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

core_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_fleet EmrCluster#core_instance_fleet}

---

##### `coreInstanceGroup`<sup>Optional</sup> <a name="coreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.coreInstanceGroup"></a>

```java
public EmrClusterCoreInstanceGroup getCoreInstanceGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

core_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#core_instance_group EmrCluster#core_instance_group}

---

##### `customAmiId`<sup>Optional</sup> <a name="customAmiId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.customAmiId"></a>

```java
public java.lang.String getCustomAmiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#custom_ami_id EmrCluster#custom_ami_id}.

---

##### `ebsRootVolumeSize`<sup>Optional</sup> <a name="ebsRootVolumeSize" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ebsRootVolumeSize"></a>

```java
public java.lang.Number getEbsRootVolumeSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_root_volume_size EmrCluster#ebs_root_volume_size}.

---

##### `ec2Attributes`<sup>Optional</sup> <a name="ec2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.ec2Attributes"></a>

```java
public EmrClusterEc2Attributes getEc2Attributes();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

ec2_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ec2_attributes EmrCluster#ec2_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#id EmrCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keepJobFlowAliveWhenNoSteps`<sup>Optional</sup> <a name="keepJobFlowAliveWhenNoSteps" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.keepJobFlowAliveWhenNoSteps"></a>

```java
public java.lang.Object getKeepJobFlowAliveWhenNoSteps();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#keep_job_flow_alive_when_no_steps EmrCluster#keep_job_flow_alive_when_no_steps}.

---

##### `kerberosAttributes`<sup>Optional</sup> <a name="kerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.kerberosAttributes"></a>

```java
public EmrClusterKerberosAttributes getKerberosAttributes();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

kerberos_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kerberos_attributes EmrCluster#kerberos_attributes}

---

##### `listStepsStates`<sup>Optional</sup> <a name="listStepsStates" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.listStepsStates"></a>

```java
public java.util.List<java.lang.String> getListStepsStates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#list_steps_states EmrCluster#list_steps_states}.

---

##### `logEncryptionKmsKeyId`<sup>Optional</sup> <a name="logEncryptionKmsKeyId" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logEncryptionKmsKeyId"></a>

```java
public java.lang.String getLogEncryptionKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_encryption_kms_key_id EmrCluster#log_encryption_kms_key_id}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#log_uri EmrCluster#log_uri}.

---

##### `masterInstanceFleet`<sup>Optional</sup> <a name="masterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceFleet"></a>

```java
public EmrClusterMasterInstanceFleet getMasterInstanceFleet();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

master_instance_fleet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_fleet EmrCluster#master_instance_fleet}

---

##### `masterInstanceGroup`<sup>Optional</sup> <a name="masterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.masterInstanceGroup"></a>

```java
public EmrClusterMasterInstanceGroup getMasterInstanceGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

master_instance_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#master_instance_group EmrCluster#master_instance_group}

---

##### `scaleDownBehavior`<sup>Optional</sup> <a name="scaleDownBehavior" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.scaleDownBehavior"></a>

```java
public java.lang.String getScaleDownBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#scale_down_behavior EmrCluster#scale_down_behavior}.

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#security_configuration EmrCluster#security_configuration}.

---

##### `step`<sup>Optional</sup> <a name="step" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.step"></a>

```java
public java.lang.Object getStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step EmrCluster#step}.

---

##### `stepConcurrencyLevel`<sup>Optional</sup> <a name="stepConcurrencyLevel" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.stepConcurrencyLevel"></a>

```java
public java.lang.Number getStepConcurrencyLevel();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#step_concurrency_level EmrCluster#step_concurrency_level}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags EmrCluster#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#tags_all EmrCluster#tags_all}.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.terminationProtection"></a>

```java
public java.lang.Object getTerminationProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#termination_protection EmrCluster#termination_protection}.

---

##### `visibleToAllUsers`<sup>Optional</sup> <a name="visibleToAllUsers" id="@cdktf/provider-aws.emrCluster.EmrClusterConfig.property.visibleToAllUsers"></a>

```java
public java.lang.Object getVisibleToAllUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#visible_to_all_users EmrCluster#visible_to_all_users}.

---

### EmrClusterCoreInstanceFleet <a name="EmrClusterCoreInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleet;

EmrClusterCoreInstanceFleet.builder()
//  .instanceTypeConfigs(IResolvable)
//  .instanceTypeConfigs(java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigs>)
//  .launchSpecifications(EmrClusterCoreInstanceFleetLaunchSpecifications)
//  .name(java.lang.String)
//  .targetOnDemandCapacity(java.lang.Number)
//  .targetSpotCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>></code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instanceTypeConfigs`<sup>Optional</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.instanceTypeConfigs"></a>

```java
public java.lang.Object getInstanceTypeConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>>

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launchSpecifications`<sup>Optional</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.launchSpecifications"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecifications getLaunchSpecifications();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `targetOnDemandCapacity`<sup>Optional</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetOnDemandCapacity"></a>

```java
public java.lang.Number getTargetOnDemandCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `targetSpotCapacity`<sup>Optional</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet.property.targetSpotCapacity"></a>

```java
public java.lang.Number getTargetSpotCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigs <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs;

EmrClusterCoreInstanceFleetInstanceTypeConfigs.builder()
    .instanceType(java.lang.String)
//  .bidPrice(java.lang.String)
//  .bidPriceAsPercentageOfOnDemandPrice(java.lang.Number)
//  .configurations(IResolvable)
//  .configurations(java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations>)
//  .ebsConfig(IResolvable)
//  .ebsConfig(java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig>)
//  .weightedCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```java
public java.lang.Object getConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>>

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```java
public java.lang.Object getEbsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>>

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations;

EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.builder()
//  .classification(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig;

EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .iops(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterCoreInstanceFleetLaunchSpecifications <a name="EmrClusterCoreInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecifications;

EmrClusterCoreInstanceFleetLaunchSpecifications.builder()
//  .onDemandSpecification(IResolvable)
//  .onDemandSpecification(java.util.List<EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification>)
//  .spotSpecification(IResolvable)
//  .spotSpecification(java.util.List<EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification">onDemandSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification">spotSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | spot_specification block. |

---

##### `onDemandSpecification`<sup>Optional</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```java
public java.lang.Object getOnDemandSpecification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spotSpecification`<sup>Optional</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```java
public java.lang.Object getSpotSpecification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>>

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification;

EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.builder()
    .allocationStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification;

EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.builder()
    .allocationStrategy(java.lang.String)
    .timeoutAction(java.lang.String)
    .timeoutDurationMinutes(java.lang.Number)
//  .blockDurationMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```java
public java.lang.Number getTimeoutDurationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterCoreInstanceGroup <a name="EmrClusterCoreInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceGroup;

EmrClusterCoreInstanceGroup.builder()
    .instanceType(java.lang.String)
//  .autoscalingPolicy(java.lang.String)
//  .bidPrice(java.lang.String)
//  .ebsConfig(IResolvable)
//  .ebsConfig(java.util.List<EmrClusterCoreInstanceGroupEbsConfig>)
//  .instanceCount(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig">ebsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>></code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `autoscalingPolicy`<sup>Optional</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.autoscalingPolicy"></a>

```java
public java.lang.String getAutoscalingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#autoscaling_policy EmrCluster#autoscaling_policy}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.ebsConfig"></a>

```java
public java.lang.Object getEbsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>>

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterCoreInstanceGroupEbsConfig <a name="EmrClusterCoreInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceGroupEbsConfig;

EmrClusterCoreInstanceGroupEbsConfig.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .iops(java.lang.Number)
//  .throughput(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterEc2Attributes <a name="EmrClusterEc2Attributes" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterEc2Attributes;

EmrClusterEc2Attributes.builder()
    .instanceProfile(java.lang.String)
//  .additionalMasterSecurityGroups(java.lang.String)
//  .additionalSlaveSecurityGroups(java.lang.String)
//  .emrManagedMasterSecurityGroup(java.lang.String)
//  .emrManagedSlaveSecurityGroup(java.lang.String)
//  .keyName(java.lang.String)
//  .serviceAccessSecurityGroup(java.lang.String)
//  .subnetId(java.lang.String)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile">instanceProfile</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups">additionalMasterSecurityGroups</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups">additionalSlaveSecurityGroups</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup">emrManagedMasterSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup">emrManagedSlaveSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}. |

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.instanceProfile"></a>

```java
public java.lang.String getInstanceProfile();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_profile EmrCluster#instance_profile}.

---

##### `additionalMasterSecurityGroups`<sup>Optional</sup> <a name="additionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalMasterSecurityGroups"></a>

```java
public java.lang.String getAdditionalMasterSecurityGroups();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_master_security_groups EmrCluster#additional_master_security_groups}.

---

##### `additionalSlaveSecurityGroups`<sup>Optional</sup> <a name="additionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.additionalSlaveSecurityGroups"></a>

```java
public java.lang.String getAdditionalSlaveSecurityGroups();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#additional_slave_security_groups EmrCluster#additional_slave_security_groups}.

---

##### `emrManagedMasterSecurityGroup`<sup>Optional</sup> <a name="emrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedMasterSecurityGroup"></a>

```java
public java.lang.String getEmrManagedMasterSecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_master_security_group EmrCluster#emr_managed_master_security_group}.

---

##### `emrManagedSlaveSecurityGroup`<sup>Optional</sup> <a name="emrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.emrManagedSlaveSecurityGroup"></a>

```java
public java.lang.String getEmrManagedSlaveSecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#emr_managed_slave_security_group EmrCluster#emr_managed_slave_security_group}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#key_name EmrCluster#key_name}.

---

##### `serviceAccessSecurityGroup`<sup>Optional</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.serviceAccessSecurityGroup"></a>

```java
public java.lang.String getServiceAccessSecurityGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#service_access_security_group EmrCluster#service_access_security_group}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_id EmrCluster#subnet_id}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#subnet_ids EmrCluster#subnet_ids}.

---

### EmrClusterKerberosAttributes <a name="EmrClusterKerberosAttributes" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterKerberosAttributes;

EmrClusterKerberosAttributes.builder()
    .kdcAdminPassword(java.lang.String)
    .realm(java.lang.String)
//  .adDomainJoinPassword(java.lang.String)
//  .adDomainJoinUser(java.lang.String)
//  .crossRealmTrustPrincipalPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword">kdcAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm">realm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword">adDomainJoinPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser">adDomainJoinUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword">crossRealmTrustPrincipalPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}. |

---

##### `kdcAdminPassword`<sup>Required</sup> <a name="kdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.kdcAdminPassword"></a>

```java
public java.lang.String getKdcAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#kdc_admin_password EmrCluster#kdc_admin_password}.

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#realm EmrCluster#realm}.

---

##### `adDomainJoinPassword`<sup>Optional</sup> <a name="adDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinPassword"></a>

```java
public java.lang.String getAdDomainJoinPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_password EmrCluster#ad_domain_join_password}.

---

##### `adDomainJoinUser`<sup>Optional</sup> <a name="adDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.adDomainJoinUser"></a>

```java
public java.lang.String getAdDomainJoinUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ad_domain_join_user EmrCluster#ad_domain_join_user}.

---

##### `crossRealmTrustPrincipalPassword`<sup>Optional</sup> <a name="crossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes.property.crossRealmTrustPrincipalPassword"></a>

```java
public java.lang.String getCrossRealmTrustPrincipalPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#cross_realm_trust_principal_password EmrCluster#cross_realm_trust_principal_password}.

---

### EmrClusterMasterInstanceFleet <a name="EmrClusterMasterInstanceFleet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleet;

EmrClusterMasterInstanceFleet.builder()
//  .instanceTypeConfigs(IResolvable)
//  .instanceTypeConfigs(java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigs>)
//  .launchSpecifications(EmrClusterMasterInstanceFleetLaunchSpecifications)
//  .name(java.lang.String)
//  .targetOnDemandCapacity(java.lang.Number)
//  .targetSpotCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>></code> | instance_type_configs block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | launch_specifications block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}. |

---

##### `instanceTypeConfigs`<sup>Optional</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.instanceTypeConfigs"></a>

```java
public java.lang.Object getInstanceTypeConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>>

instance_type_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type_configs EmrCluster#instance_type_configs}

---

##### `launchSpecifications`<sup>Optional</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.launchSpecifications"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecifications getLaunchSpecifications();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

launch_specifications block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#launch_specifications EmrCluster#launch_specifications}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

##### `targetOnDemandCapacity`<sup>Optional</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetOnDemandCapacity"></a>

```java
public java.lang.Number getTargetOnDemandCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_on_demand_capacity EmrCluster#target_on_demand_capacity}.

---

##### `targetSpotCapacity`<sup>Optional</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet.property.targetSpotCapacity"></a>

```java
public java.lang.Number getTargetSpotCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#target_spot_capacity EmrCluster#target_spot_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigs <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs;

EmrClusterMasterInstanceFleetInstanceTypeConfigs.builder()
    .instanceType(java.lang.String)
//  .bidPrice(java.lang.String)
//  .bidPriceAsPercentageOfOnDemandPrice(java.lang.Number)
//  .configurations(IResolvable)
//  .configurations(java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations>)
//  .ebsConfig(IResolvable)
//  .ebsConfig(java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig>)
//  .weightedCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations">configurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig">ebsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPrice();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price_as_percentage_of_on_demand_price EmrCluster#bid_price_as_percentage_of_on_demand_price}.

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.configurations"></a>

```java
public java.lang.Object getConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>>

configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#configurations EmrCluster#configurations}

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.ebsConfig"></a>

```java
public java.lang.Object getEbsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>>

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `weightedCapacity`<sup>Optional</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#weighted_capacity EmrCluster#weighted_capacity}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations;

EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.builder()
//  .classification(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification">classification</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#classification EmrCluster#classification}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig;

EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .iops(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterMasterInstanceFleetLaunchSpecifications <a name="EmrClusterMasterInstanceFleetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecifications;

EmrClusterMasterInstanceFleetLaunchSpecifications.builder()
//  .onDemandSpecification(IResolvable)
//  .onDemandSpecification(java.util.List<EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification>)
//  .spotSpecification(IResolvable)
//  .spotSpecification(java.util.List<EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification">onDemandSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | on_demand_specification block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification">spotSpecification</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | spot_specification block. |

---

##### `onDemandSpecification`<sup>Optional</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.onDemandSpecification"></a>

```java
public java.lang.Object getOnDemandSpecification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

on_demand_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#on_demand_specification EmrCluster#on_demand_specification}

---

##### `spotSpecification`<sup>Optional</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications.property.spotSpecification"></a>

```java
public java.lang.Object getSpotSpecification();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>>

spot_specification block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#spot_specification EmrCluster#spot_specification}

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification;

EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.builder()
    .allocationStrategy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification;

EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.builder()
    .allocationStrategy(java.lang.String)
    .timeoutAction(java.lang.String)
    .timeoutDurationMinutes(java.lang.Number)
//  .blockDurationMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}. |

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#allocation_strategy EmrCluster#allocation_strategy}.

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_action EmrCluster#timeout_action}.

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.timeoutDurationMinutes"></a>

```java
public java.lang.Number getTimeoutDurationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#timeout_duration_minutes EmrCluster#timeout_duration_minutes}.

---

##### `blockDurationMinutes`<sup>Optional</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#block_duration_minutes EmrCluster#block_duration_minutes}.

---

### EmrClusterMasterInstanceGroup <a name="EmrClusterMasterInstanceGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceGroup;

EmrClusterMasterInstanceGroup.builder()
    .instanceType(java.lang.String)
//  .bidPrice(java.lang.String)
//  .ebsConfig(IResolvable)
//  .ebsConfig(java.util.List<EmrClusterMasterInstanceGroupEbsConfig>)
//  .instanceCount(java.lang.Number)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig">ebsConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>></code> | ebs_config block. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_type EmrCluster#instance_type}.

---

##### `bidPrice`<sup>Optional</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#bid_price EmrCluster#bid_price}.

---

##### `ebsConfig`<sup>Optional</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.ebsConfig"></a>

```java
public java.lang.Object getEbsConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>>

ebs_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#ebs_config EmrCluster#ebs_config}

---

##### `instanceCount`<sup>Optional</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#instance_count EmrCluster#instance_count}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterMasterInstanceGroupEbsConfig <a name="EmrClusterMasterInstanceGroupEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceGroupEbsConfig;

EmrClusterMasterInstanceGroupEbsConfig.builder()
    .size(java.lang.Number)
    .type(java.lang.String)
//  .iops(java.lang.Number)
//  .throughput(java.lang.Number)
//  .volumesPerInstance(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops">iops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}. |

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#size EmrCluster#size}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#type EmrCluster#type}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#iops EmrCluster#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#throughput EmrCluster#throughput}.

---

##### `volumesPerInstance`<sup>Optional</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#volumes_per_instance EmrCluster#volumes_per_instance}.

---

### EmrClusterStep <a name="EmrClusterStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStep;

EmrClusterStep.builder()
//  .actionOnFailure(java.lang.String)
//  .hadoopJarStep(IResolvable)
//  .hadoopJarStep(java.util.List<EmrClusterStepHadoopJarStep>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure">actionOnFailure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep">hadoopJarStep</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}. |

---

##### `actionOnFailure`<sup>Optional</sup> <a name="actionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.actionOnFailure"></a>

```java
public java.lang.String getActionOnFailure();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#action_on_failure EmrCluster#action_on_failure}.

---

##### `hadoopJarStep`<sup>Optional</sup> <a name="hadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.hadoopJarStep"></a>

```java
public java.lang.Object getHadoopJarStep();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#hadoop_jar_step EmrCluster#hadoop_jar_step}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStep.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#name EmrCluster#name}.

---

### EmrClusterStepHadoopJarStep <a name="EmrClusterStepHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStepHadoopJarStep;

EmrClusterStepHadoopJarStep.builder()
//  .args(java.util.List<java.lang.String>)
//  .jar(java.lang.String)
//  .mainClass(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar">jar</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#args EmrCluster#args}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#jar EmrCluster#jar}.

---

##### `mainClass`<sup>Optional</sup> <a name="mainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#main_class EmrCluster#main_class}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_cluster#properties EmrCluster#properties}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrClusterAutoTerminationPolicyOutputReference <a name="EmrClusterAutoTerminationPolicyOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterAutoTerminationPolicyOutputReference;

new EmrClusterAutoTerminationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicyOutputReference.property.internalValue"></a>

```java
public EmrClusterAutoTerminationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterAutoTerminationPolicy">EmrClusterAutoTerminationPolicy</a>

---


### EmrClusterBootstrapActionList <a name="EmrClusterBootstrapActionList" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterBootstrapActionList;

new EmrClusterBootstrapActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get"></a>

```java
public EmrClusterBootstrapActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a>>

---


### EmrClusterBootstrapActionOutputReference <a name="EmrClusterBootstrapActionOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterBootstrapActionOutputReference;

new EmrClusterBootstrapActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterBootstrapActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterBootstrapAction">EmrClusterBootstrapAction</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>>

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```java
public void resetClassification()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsList <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>>

---


### EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference;

new EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">resetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```java
public void putConfigurations(IResolvable OR java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>>

---

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```java
public void putEbsConfig(IResolvable OR java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```java
public void resetBidPrice()
```

##### `resetBidPriceAsPercentageOfOnDemandPrice` <a name="resetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```java
public void resetBidPriceAsPercentageOfOnDemandPrice()
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```java
public void resetEbsConfig()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList getEbsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPriceInput();
```

- *Type:* java.lang.Number

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```java
public java.lang.String getBidPriceInput();
```

- *Type:* java.lang.String

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```java
public java.lang.Object getConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterCoreInstanceFleetInstanceTypeConfigsConfigurations</a>>

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```java
public java.lang.Object getEbsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterCoreInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.Number getWeightedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPrice();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList;

new EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference;

new EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference;

new EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">putOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">putSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">resetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">resetSpotSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemandSpecification` <a name="putOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```java
public void putOnDemandSpecification(IResolvable OR java.util.List<EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---

##### `putSpotSpecification` <a name="putSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```java
public void putSpotSpecification(IResolvable OR java.util.List<EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---

##### `resetOnDemandSpecification` <a name="resetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```java
public void resetOnDemandSpecification()
```

##### `resetSpotSpecification` <a name="resetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```java
public void resetSpotSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">onDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">onDemandSpecificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spotSpecificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDemandSpecification`<sup>Required</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList getOnDemandSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spotSpecification`<sup>Required</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList getSpotSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `onDemandSpecificationInput`<sup>Optional</sup> <a name="onDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```java
public java.lang.Object getOnDemandSpecificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---

##### `spotSpecificationInput`<sup>Optional</sup> <a name="spotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```java
public java.lang.Object getSpotSpecificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecifications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList;

new EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---


### EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference;

new EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```java
public void resetBlockDurationMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeoutDurationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```java
public java.lang.Number getBlockDurationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `timeoutDurationMinutesInput`<sup>Optional</sup> <a name="timeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```java
public java.lang.Number getTimeoutDurationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```java
public java.lang.Number getTimeoutDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceFleetOutputReference <a name="EmrClusterCoreInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceFleetOutputReference;

new EmrClusterCoreInstanceFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs">putInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications">putLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs">resetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications">resetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity">resetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity">resetTargetSpotCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceTypeConfigs` <a name="putInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```java
public void putInstanceTypeConfigs(IResolvable OR java.util.List<EmrClusterCoreInstanceFleetInstanceTypeConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>>

---

##### `putLaunchSpecifications` <a name="putLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications"></a>

```java
public void putLaunchSpecifications(EmrClusterCoreInstanceFleetLaunchSpecifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `resetInstanceTypeConfigs` <a name="resetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```java
public void resetInstanceTypeConfigs()
```

##### `resetLaunchSpecifications` <a name="resetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```java
public void resetLaunchSpecifications()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTargetOnDemandCapacity` <a name="resetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```java
public void resetTargetOnDemandCapacity()
```

##### `resetTargetSpotCapacity` <a name="resetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```java
public void resetTargetSpotCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisionedOnDemandCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity">provisionedSpotCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput">instanceTypeConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput">launchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput">targetOnDemandCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput">targetSpotCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTypeConfigs`<sup>Required</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```java
public EmrClusterCoreInstanceFleetInstanceTypeConfigsList getInstanceTypeConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigsList">EmrClusterCoreInstanceFleetInstanceTypeConfigsList</a>

---

##### `launchSpecifications`<sup>Required</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecifications"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference getLaunchSpecifications();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference">EmrClusterCoreInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisionedOnDemandCapacity`<sup>Required</sup> <a name="provisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```java
public java.lang.Number getProvisionedOnDemandCapacity();
```

- *Type:* java.lang.Number

---

##### `provisionedSpotCapacity`<sup>Required</sup> <a name="provisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```java
public java.lang.Number getProvisionedSpotCapacity();
```

- *Type:* java.lang.Number

---

##### `instanceTypeConfigsInput`<sup>Optional</sup> <a name="instanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```java
public java.lang.Object getInstanceTypeConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetInstanceTypeConfigs">EmrClusterCoreInstanceFleetInstanceTypeConfigs</a>>

---

##### `launchSpecificationsInput`<sup>Optional</sup> <a name="launchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```java
public EmrClusterCoreInstanceFleetLaunchSpecifications getLaunchSpecificationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetLaunchSpecifications">EmrClusterCoreInstanceFleetLaunchSpecifications</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetOnDemandCapacityInput`<sup>Optional</sup> <a name="targetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```java
public java.lang.Number getTargetOnDemandCapacityInput();
```

- *Type:* java.lang.Number

---

##### `targetSpotCapacityInput`<sup>Optional</sup> <a name="targetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```java
public java.lang.Number getTargetSpotCapacityInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetOnDemandCapacity`<sup>Required</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```java
public java.lang.Number getTargetOnDemandCapacity();
```

- *Type:* java.lang.Number

---

##### `targetSpotCapacity`<sup>Required</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```java
public java.lang.Number getTargetSpotCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleetOutputReference.property.internalValue"></a>

```java
public EmrClusterCoreInstanceFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceFleet">EmrClusterCoreInstanceFleet</a>

---


### EmrClusterCoreInstanceGroupEbsConfigList <a name="EmrClusterCoreInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceGroupEbsConfigList;

new EmrClusterCoreInstanceGroupEbsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get"></a>

```java
public EmrClusterCoreInstanceGroupEbsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>>

---


### EmrClusterCoreInstanceGroupEbsConfigOutputReference <a name="EmrClusterCoreInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference;

new EmrClusterCoreInstanceGroupEbsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterCoreInstanceGroupOutputReference <a name="EmrClusterCoreInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterCoreInstanceGroupOutputReference;

new EmrClusterCoreInstanceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy">resetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig"></a>

```java
public void putEbsConfig(IResolvable OR java.util.List<EmrClusterCoreInstanceGroupEbsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>>

---

##### `resetAutoscalingPolicy` <a name="resetAutoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetAutoscalingPolicy"></a>

```java
public void resetAutoscalingPolicy()
```

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetBidPrice"></a>

```java
public void resetBidPrice()
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetEbsConfig"></a>

```java
public void resetEbsConfig()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput">autoscalingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy">autoscalingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfig"></a>

```java
public EmrClusterCoreInstanceGroupEbsConfigList getEbsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfigList">EmrClusterCoreInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `autoscalingPolicyInput`<sup>Optional</sup> <a name="autoscalingPolicyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicyInput"></a>

```java
public java.lang.String getAutoscalingPolicyInput();
```

- *Type:* java.lang.String

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPriceInput"></a>

```java
public java.lang.String getBidPriceInput();
```

- *Type:* java.lang.String

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.ebsConfigInput"></a>

```java
public java.lang.Object getEbsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupEbsConfig">EmrClusterCoreInstanceGroupEbsConfig</a>>

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `autoscalingPolicy`<sup>Required</sup> <a name="autoscalingPolicy" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.autoscalingPolicy"></a>

```java
public java.lang.String getAutoscalingPolicy();
```

- *Type:* java.lang.String

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroupOutputReference.property.internalValue"></a>

```java
public EmrClusterCoreInstanceGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterCoreInstanceGroup">EmrClusterCoreInstanceGroup</a>

---


### EmrClusterEc2AttributesOutputReference <a name="EmrClusterEc2AttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterEc2AttributesOutputReference;

new EmrClusterEc2AttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups">resetAdditionalMasterSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups">resetAdditionalSlaveSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup">resetEmrManagedMasterSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup">resetEmrManagedSlaveSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup">resetServiceAccessSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalMasterSecurityGroups` <a name="resetAdditionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalMasterSecurityGroups"></a>

```java
public void resetAdditionalMasterSecurityGroups()
```

##### `resetAdditionalSlaveSecurityGroups` <a name="resetAdditionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetAdditionalSlaveSecurityGroups"></a>

```java
public void resetAdditionalSlaveSecurityGroups()
```

##### `resetEmrManagedMasterSecurityGroup` <a name="resetEmrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedMasterSecurityGroup"></a>

```java
public void resetEmrManagedMasterSecurityGroup()
```

##### `resetEmrManagedSlaveSecurityGroup` <a name="resetEmrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetEmrManagedSlaveSecurityGroup"></a>

```java
public void resetEmrManagedSlaveSecurityGroup()
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetKeyName"></a>

```java
public void resetKeyName()
```

##### `resetServiceAccessSecurityGroup` <a name="resetServiceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetServiceAccessSecurityGroup"></a>

```java
public void resetServiceAccessSecurityGroup()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput">additionalMasterSecurityGroupsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput">additionalSlaveSecurityGroupsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput">emrManagedMasterSecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput">emrManagedSlaveSecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput">instanceProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput">serviceAccessSecurityGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups">additionalMasterSecurityGroups</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups">additionalSlaveSecurityGroups</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup">emrManagedMasterSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup">emrManagedSlaveSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile">instanceProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup">serviceAccessSecurityGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalMasterSecurityGroupsInput`<sup>Optional</sup> <a name="additionalMasterSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroupsInput"></a>

```java
public java.lang.String getAdditionalMasterSecurityGroupsInput();
```

- *Type:* java.lang.String

---

##### `additionalSlaveSecurityGroupsInput`<sup>Optional</sup> <a name="additionalSlaveSecurityGroupsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroupsInput"></a>

```java
public java.lang.String getAdditionalSlaveSecurityGroupsInput();
```

- *Type:* java.lang.String

---

##### `emrManagedMasterSecurityGroupInput`<sup>Optional</sup> <a name="emrManagedMasterSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroupInput"></a>

```java
public java.lang.String getEmrManagedMasterSecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `emrManagedSlaveSecurityGroupInput`<sup>Optional</sup> <a name="emrManagedSlaveSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroupInput"></a>

```java
public java.lang.String getEmrManagedSlaveSecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileInput`<sup>Optional</sup> <a name="instanceProfileInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfileInput"></a>

```java
public java.lang.String getInstanceProfileInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `serviceAccessSecurityGroupInput`<sup>Optional</sup> <a name="serviceAccessSecurityGroupInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroupInput"></a>

```java
public java.lang.String getServiceAccessSecurityGroupInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalMasterSecurityGroups`<sup>Required</sup> <a name="additionalMasterSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalMasterSecurityGroups"></a>

```java
public java.lang.String getAdditionalMasterSecurityGroups();
```

- *Type:* java.lang.String

---

##### `additionalSlaveSecurityGroups`<sup>Required</sup> <a name="additionalSlaveSecurityGroups" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.additionalSlaveSecurityGroups"></a>

```java
public java.lang.String getAdditionalSlaveSecurityGroups();
```

- *Type:* java.lang.String

---

##### `emrManagedMasterSecurityGroup`<sup>Required</sup> <a name="emrManagedMasterSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedMasterSecurityGroup"></a>

```java
public java.lang.String getEmrManagedMasterSecurityGroup();
```

- *Type:* java.lang.String

---

##### `emrManagedSlaveSecurityGroup`<sup>Required</sup> <a name="emrManagedSlaveSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.emrManagedSlaveSecurityGroup"></a>

```java
public java.lang.String getEmrManagedSlaveSecurityGroup();
```

- *Type:* java.lang.String

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.instanceProfile"></a>

```java
public java.lang.String getInstanceProfile();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `serviceAccessSecurityGroup`<sup>Required</sup> <a name="serviceAccessSecurityGroup" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.serviceAccessSecurityGroup"></a>

```java
public java.lang.String getServiceAccessSecurityGroup();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterEc2AttributesOutputReference.property.internalValue"></a>

```java
public EmrClusterEc2Attributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterEc2Attributes">EmrClusterEc2Attributes</a>

---


### EmrClusterKerberosAttributesOutputReference <a name="EmrClusterKerberosAttributesOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterKerberosAttributesOutputReference;

new EmrClusterKerberosAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword">resetAdDomainJoinPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser">resetAdDomainJoinUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword">resetCrossRealmTrustPrincipalPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdDomainJoinPassword` <a name="resetAdDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinPassword"></a>

```java
public void resetAdDomainJoinPassword()
```

##### `resetAdDomainJoinUser` <a name="resetAdDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetAdDomainJoinUser"></a>

```java
public void resetAdDomainJoinUser()
```

##### `resetCrossRealmTrustPrincipalPassword` <a name="resetCrossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.resetCrossRealmTrustPrincipalPassword"></a>

```java
public void resetCrossRealmTrustPrincipalPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput">adDomainJoinPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput">adDomainJoinUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput">crossRealmTrustPrincipalPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput">kdcAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput">realmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword">adDomainJoinPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser">adDomainJoinUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword">crossRealmTrustPrincipalPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword">kdcAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm">realm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adDomainJoinPasswordInput`<sup>Optional</sup> <a name="adDomainJoinPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPasswordInput"></a>

```java
public java.lang.String getAdDomainJoinPasswordInput();
```

- *Type:* java.lang.String

---

##### `adDomainJoinUserInput`<sup>Optional</sup> <a name="adDomainJoinUserInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUserInput"></a>

```java
public java.lang.String getAdDomainJoinUserInput();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustPrincipalPasswordInput`<sup>Optional</sup> <a name="crossRealmTrustPrincipalPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPasswordInput"></a>

```java
public java.lang.String getCrossRealmTrustPrincipalPasswordInput();
```

- *Type:* java.lang.String

---

##### `kdcAdminPasswordInput`<sup>Optional</sup> <a name="kdcAdminPasswordInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPasswordInput"></a>

```java
public java.lang.String getKdcAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realmInput"></a>

```java
public java.lang.String getRealmInput();
```

- *Type:* java.lang.String

---

##### `adDomainJoinPassword`<sup>Required</sup> <a name="adDomainJoinPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinPassword"></a>

```java
public java.lang.String getAdDomainJoinPassword();
```

- *Type:* java.lang.String

---

##### `adDomainJoinUser`<sup>Required</sup> <a name="adDomainJoinUser" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.adDomainJoinUser"></a>

```java
public java.lang.String getAdDomainJoinUser();
```

- *Type:* java.lang.String

---

##### `crossRealmTrustPrincipalPassword`<sup>Required</sup> <a name="crossRealmTrustPrincipalPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.crossRealmTrustPrincipalPassword"></a>

```java
public java.lang.String getCrossRealmTrustPrincipalPassword();
```

- *Type:* java.lang.String

---

##### `kdcAdminPassword`<sup>Required</sup> <a name="kdcAdminPassword" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.kdcAdminPassword"></a>

```java
public java.lang.String getKdcAdminPassword();
```

- *Type:* java.lang.String

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributesOutputReference.property.internalValue"></a>

```java
public EmrClusterKerberosAttributes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterKerberosAttributes">EmrClusterKerberosAttributes</a>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetClassification"></a>

```java
public void resetClassification()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsList <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>>

---


### EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference <a name="EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference;

new EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice">resetBidPriceAsPercentageOfOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity">resetWeightedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfigurations` <a name="putConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations"></a>

```java
public void putConfigurations(IResolvable OR java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>>

---

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig"></a>

```java
public void putEbsConfig(IResolvable OR java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPrice"></a>

```java
public void resetBidPrice()
```

##### `resetBidPriceAsPercentageOfOnDemandPrice` <a name="resetBidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetBidPriceAsPercentageOfOnDemandPrice"></a>

```java
public void resetBidPriceAsPercentageOfOnDemandPrice()
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetEbsConfig"></a>

```java
public void resetEbsConfig()
```

##### `resetWeightedCapacity` <a name="resetWeightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.resetWeightedCapacity"></a>

```java
public void resetWeightedCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations">configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput">bidPriceAsPercentageOfOnDemandPriceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput">configurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput">weightedCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice">bidPriceAsPercentageOfOnDemandPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity">weightedCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurations"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurationsList</a>

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfig"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList getEbsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfigList</a>

---

##### `bidPriceAsPercentageOfOnDemandPriceInput`<sup>Optional</sup> <a name="bidPriceAsPercentageOfOnDemandPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPriceInput"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPriceInput();
```

- *Type:* java.lang.Number

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceInput"></a>

```java
public java.lang.String getBidPriceInput();
```

- *Type:* java.lang.String

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.configurationsInput"></a>

```java
public java.lang.Object getConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations">EmrClusterMasterInstanceFleetInstanceTypeConfigsConfigurations</a>>

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.ebsConfigInput"></a>

```java
public java.lang.Object getEbsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig">EmrClusterMasterInstanceFleetInstanceTypeConfigsEbsConfig</a>>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `weightedCapacityInput`<sup>Optional</sup> <a name="weightedCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacityInput"></a>

```java
public java.lang.Number getWeightedCapacityInput();
```

- *Type:* java.lang.Number

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

---

##### `bidPriceAsPercentageOfOnDemandPrice`<sup>Required</sup> <a name="bidPriceAsPercentageOfOnDemandPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.bidPriceAsPercentageOfOnDemandPrice"></a>

```java
public java.lang.Number getBidPriceAsPercentageOfOnDemandPrice();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `weightedCapacity`<sup>Required</sup> <a name="weightedCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.weightedCapacity"></a>

```java
public java.lang.Number getWeightedCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList;

new EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference;

new EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference;

new EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification">putOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification">putSpotSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification">resetOnDemandSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification">resetSpotSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOnDemandSpecification` <a name="putOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification"></a>

```java
public void putOnDemandSpecification(IResolvable OR java.util.List<EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putOnDemandSpecification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---

##### `putSpotSpecification` <a name="putSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification"></a>

```java
public void putSpotSpecification(IResolvable OR java.util.List<EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.putSpotSpecification.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---

##### `resetOnDemandSpecification` <a name="resetOnDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetOnDemandSpecification"></a>

```java
public void resetOnDemandSpecification()
```

##### `resetSpotSpecification` <a name="resetSpotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.resetSpotSpecification"></a>

```java
public void resetSpotSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification">onDemandSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification">spotSpecification</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput">onDemandSpecificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput">spotSpecificationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `onDemandSpecification`<sup>Required</sup> <a name="onDemandSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecification"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList getOnDemandSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecificationList</a>

---

##### `spotSpecification`<sup>Required</sup> <a name="spotSpecification" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecification"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList getSpotSpecification();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList</a>

---

##### `onDemandSpecificationInput`<sup>Optional</sup> <a name="onDemandSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.onDemandSpecificationInput"></a>

```java
public java.lang.Object getOnDemandSpecificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification</a>>

---

##### `spotSpecificationInput`<sup>Optional</sup> <a name="spotSpecificationInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.spotSpecificationInput"></a>

```java
public java.lang.Object getSpotSpecificationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference.property.internalValue"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecifications getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList;

new EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a>>

---


### EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference <a name="EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference;

new EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes">resetBlockDurationMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBlockDurationMinutes` <a name="resetBlockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.resetBlockDurationMinutes"></a>

```java
public void resetBlockDurationMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput">allocationStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput">blockDurationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput">timeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput">timeoutDurationMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy">allocationStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction">timeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes">timeoutDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocationStrategyInput`<sup>Optional</sup> <a name="allocationStrategyInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategyInput"></a>

```java
public java.lang.String getAllocationStrategyInput();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutesInput`<sup>Optional</sup> <a name="blockDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutesInput"></a>

```java
public java.lang.Number getBlockDurationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `timeoutActionInput`<sup>Optional</sup> <a name="timeoutActionInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutActionInput"></a>

```java
public java.lang.String getTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `timeoutDurationMinutesInput`<sup>Optional</sup> <a name="timeoutDurationMinutesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutesInput"></a>

```java
public java.lang.Number getTimeoutDurationMinutesInput();
```

- *Type:* java.lang.Number

---

##### `allocationStrategy`<sup>Required</sup> <a name="allocationStrategy" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.allocationStrategy"></a>

```java
public java.lang.String getAllocationStrategy();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `timeoutAction`<sup>Required</sup> <a name="timeoutAction" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutAction"></a>

```java
public java.lang.String getTimeoutAction();
```

- *Type:* java.lang.String

---

##### `timeoutDurationMinutes`<sup>Required</sup> <a name="timeoutDurationMinutes" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.timeoutDurationMinutes"></a>

```java
public java.lang.Number getTimeoutDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecificationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification">EmrClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceFleetOutputReference <a name="EmrClusterMasterInstanceFleetOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceFleetOutputReference;

new EmrClusterMasterInstanceFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs">putInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications">putLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs">resetInstanceTypeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications">resetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity">resetTargetOnDemandCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity">resetTargetSpotCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInstanceTypeConfigs` <a name="putInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs"></a>

```java
public void putInstanceTypeConfigs(IResolvable OR java.util.List<EmrClusterMasterInstanceFleetInstanceTypeConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putInstanceTypeConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>>

---

##### `putLaunchSpecifications` <a name="putLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications"></a>

```java
public void putLaunchSpecifications(EmrClusterMasterInstanceFleetLaunchSpecifications value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.putLaunchSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `resetInstanceTypeConfigs` <a name="resetInstanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetInstanceTypeConfigs"></a>

```java
public void resetInstanceTypeConfigs()
```

##### `resetLaunchSpecifications` <a name="resetLaunchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetLaunchSpecifications"></a>

```java
public void resetLaunchSpecifications()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTargetOnDemandCapacity` <a name="resetTargetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetOnDemandCapacity"></a>

```java
public void resetTargetOnDemandCapacity()
```

##### `resetTargetSpotCapacity` <a name="resetTargetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.resetTargetSpotCapacity"></a>

```java
public void resetTargetSpotCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs">instanceTypeConfigs</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications">launchSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity">provisionedOnDemandCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity">provisionedSpotCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput">instanceTypeConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput">launchSpecificationsInput</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput">targetOnDemandCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput">targetSpotCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity">targetOnDemandCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity">targetSpotCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceTypeConfigs`<sup>Required</sup> <a name="instanceTypeConfigs" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigs"></a>

```java
public EmrClusterMasterInstanceFleetInstanceTypeConfigsList getInstanceTypeConfigs();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigsList">EmrClusterMasterInstanceFleetInstanceTypeConfigsList</a>

---

##### `launchSpecifications`<sup>Required</sup> <a name="launchSpecifications" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecifications"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference getLaunchSpecifications();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference">EmrClusterMasterInstanceFleetLaunchSpecificationsOutputReference</a>

---

##### `provisionedOnDemandCapacity`<sup>Required</sup> <a name="provisionedOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedOnDemandCapacity"></a>

```java
public java.lang.Number getProvisionedOnDemandCapacity();
```

- *Type:* java.lang.Number

---

##### `provisionedSpotCapacity`<sup>Required</sup> <a name="provisionedSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.provisionedSpotCapacity"></a>

```java
public java.lang.Number getProvisionedSpotCapacity();
```

- *Type:* java.lang.Number

---

##### `instanceTypeConfigsInput`<sup>Optional</sup> <a name="instanceTypeConfigsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.instanceTypeConfigsInput"></a>

```java
public java.lang.Object getInstanceTypeConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetInstanceTypeConfigs">EmrClusterMasterInstanceFleetInstanceTypeConfigs</a>>

---

##### `launchSpecificationsInput`<sup>Optional</sup> <a name="launchSpecificationsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.launchSpecificationsInput"></a>

```java
public EmrClusterMasterInstanceFleetLaunchSpecifications getLaunchSpecificationsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetLaunchSpecifications">EmrClusterMasterInstanceFleetLaunchSpecifications</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetOnDemandCapacityInput`<sup>Optional</sup> <a name="targetOnDemandCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacityInput"></a>

```java
public java.lang.Number getTargetOnDemandCapacityInput();
```

- *Type:* java.lang.Number

---

##### `targetSpotCapacityInput`<sup>Optional</sup> <a name="targetSpotCapacityInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacityInput"></a>

```java
public java.lang.Number getTargetSpotCapacityInput();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `targetOnDemandCapacity`<sup>Required</sup> <a name="targetOnDemandCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetOnDemandCapacity"></a>

```java
public java.lang.Number getTargetOnDemandCapacity();
```

- *Type:* java.lang.Number

---

##### `targetSpotCapacity`<sup>Required</sup> <a name="targetSpotCapacity" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.targetSpotCapacity"></a>

```java
public java.lang.Number getTargetSpotCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleetOutputReference.property.internalValue"></a>

```java
public EmrClusterMasterInstanceFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceFleet">EmrClusterMasterInstanceFleet</a>

---


### EmrClusterMasterInstanceGroupEbsConfigList <a name="EmrClusterMasterInstanceGroupEbsConfigList" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceGroupEbsConfigList;

new EmrClusterMasterInstanceGroupEbsConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get"></a>

```java
public EmrClusterMasterInstanceGroupEbsConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>>

---


### EmrClusterMasterInstanceGroupEbsConfigOutputReference <a name="EmrClusterMasterInstanceGroupEbsConfigOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference;

new EmrClusterMasterInstanceGroupEbsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops">resetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance">resetVolumesPerInstance</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIops` <a name="resetIops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetIops"></a>

```java
public void resetIops()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetVolumesPerInstance` <a name="resetVolumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.resetVolumesPerInstance"></a>

```java
public void resetVolumesPerInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput">iopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput">volumesPerInstanceInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance">volumesPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `iopsInput`<sup>Optional</sup> <a name="iopsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iopsInput"></a>

```java
public java.lang.Number getIopsInput();
```

- *Type:* java.lang.Number

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumesPerInstanceInput`<sup>Optional</sup> <a name="volumesPerInstanceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstanceInput"></a>

```java
public java.lang.Number getVolumesPerInstanceInput();
```

- *Type:* java.lang.Number

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumesPerInstance`<sup>Required</sup> <a name="volumesPerInstance" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.volumesPerInstance"></a>

```java
public java.lang.Number getVolumesPerInstance();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterMasterInstanceGroupOutputReference <a name="EmrClusterMasterInstanceGroupOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterMasterInstanceGroupOutputReference;

new EmrClusterMasterInstanceGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig">putEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice">resetBidPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig">resetEbsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount">resetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsConfig` <a name="putEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig"></a>

```java
public void putEbsConfig(IResolvable OR java.util.List<EmrClusterMasterInstanceGroupEbsConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.putEbsConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>>

---

##### `resetBidPrice` <a name="resetBidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetBidPrice"></a>

```java
public void resetBidPrice()
```

##### `resetEbsConfig` <a name="resetEbsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetEbsConfig"></a>

```java
public void resetEbsConfig()
```

##### `resetInstanceCount` <a name="resetInstanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetInstanceCount"></a>

```java
public void resetInstanceCount()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig">ebsConfig</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput">bidPriceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput">ebsConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput">instanceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice">bidPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount">instanceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ebsConfig`<sup>Required</sup> <a name="ebsConfig" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfig"></a>

```java
public EmrClusterMasterInstanceGroupEbsConfigList getEbsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfigList">EmrClusterMasterInstanceGroupEbsConfigList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `bidPriceInput`<sup>Optional</sup> <a name="bidPriceInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPriceInput"></a>

```java
public java.lang.String getBidPriceInput();
```

- *Type:* java.lang.String

---

##### `ebsConfigInput`<sup>Optional</sup> <a name="ebsConfigInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.ebsConfigInput"></a>

```java
public java.lang.Object getEbsConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupEbsConfig">EmrClusterMasterInstanceGroupEbsConfig</a>>

---

##### `instanceCountInput`<sup>Optional</sup> <a name="instanceCountInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCountInput"></a>

```java
public java.lang.Number getInstanceCountInput();
```

- *Type:* java.lang.Number

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceTypeInput"></a>

```java
public java.lang.String getInstanceTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `bidPrice`<sup>Required</sup> <a name="bidPrice" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.bidPrice"></a>

```java
public java.lang.String getBidPrice();
```

- *Type:* java.lang.String

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceCount"></a>

```java
public java.lang.Number getInstanceCount();
```

- *Type:* java.lang.Number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroupOutputReference.property.internalValue"></a>

```java
public EmrClusterMasterInstanceGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterMasterInstanceGroup">EmrClusterMasterInstanceGroup</a>

---


### EmrClusterStepHadoopJarStepList <a name="EmrClusterStepHadoopJarStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStepHadoopJarStepList;

new EmrClusterStepHadoopJarStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get"></a>

```java
public EmrClusterStepHadoopJarStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>>

---


### EmrClusterStepHadoopJarStepOutputReference <a name="EmrClusterStepHadoopJarStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStepHadoopJarStepOutputReference;

new EmrClusterStepHadoopJarStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass">resetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetArgs"></a>

```java
public void resetArgs()
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetJar"></a>

```java
public void resetJar()
```

##### `resetMainClass` <a name="resetMainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetMainClass"></a>

```java
public void resetMainClass()
```

##### `resetProperties` <a name="resetProperties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput">argsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput">jarInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput">mainClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar">jar</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass">mainClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.argsInput"></a>

```java
public java.util.List<java.lang.String> getArgsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jarInput"></a>

```java
public java.lang.String getJarInput();
```

- *Type:* java.lang.String

---

##### `mainClassInput`<sup>Optional</sup> <a name="mainClassInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClassInput"></a>

```java
public java.lang.String getMainClassInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.jar"></a>

```java
public java.lang.String getJar();
```

- *Type:* java.lang.String

---

##### `mainClass`<sup>Required</sup> <a name="mainClass" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.mainClass"></a>

```java
public java.lang.String getMainClass();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a> OR com.hashicorp.cdktf.IResolvable

---


### EmrClusterStepList <a name="EmrClusterStepList" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStepList;

new EmrClusterStepList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get"></a>

```java
public EmrClusterStepOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a>>

---


### EmrClusterStepOutputReference <a name="EmrClusterStepOutputReference" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.emr_cluster.EmrClusterStepOutputReference;

new EmrClusterStepOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep">putHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure">resetActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep">resetHadoopJarStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHadoopJarStep` <a name="putHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep"></a>

```java
public void putHadoopJarStep(IResolvable OR java.util.List<EmrClusterStepHadoopJarStep> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.putHadoopJarStep.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>>

---

##### `resetActionOnFailure` <a name="resetActionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetActionOnFailure"></a>

```java
public void resetActionOnFailure()
```

##### `resetHadoopJarStep` <a name="resetHadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetHadoopJarStep"></a>

```java
public void resetHadoopJarStep()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep">hadoopJarStep</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput">actionOnFailureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput">hadoopJarStepInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure">actionOnFailure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hadoopJarStep`<sup>Required</sup> <a name="hadoopJarStep" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStep"></a>

```java
public EmrClusterStepHadoopJarStepList getHadoopJarStep();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStepList">EmrClusterStepHadoopJarStepList</a>

---

##### `actionOnFailureInput`<sup>Optional</sup> <a name="actionOnFailureInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailureInput"></a>

```java
public java.lang.String getActionOnFailureInput();
```

- *Type:* java.lang.String

---

##### `hadoopJarStepInput`<sup>Optional</sup> <a name="hadoopJarStepInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.hadoopJarStepInput"></a>

```java
public java.lang.Object getHadoopJarStepInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.emrCluster.EmrClusterStepHadoopJarStep">EmrClusterStepHadoopJarStep</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `actionOnFailure`<sup>Required</sup> <a name="actionOnFailure" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.actionOnFailure"></a>

```java
public java.lang.String getActionOnFailure();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.emrCluster.EmrClusterStepOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.emrCluster.EmrClusterStep">EmrClusterStep</a> OR com.hashicorp.cdktf.IResolvable

---



