# `appautoscalingPolicy` Submodule <a name="`appautoscalingPolicy` Submodule" id="@cdktf/provider-aws.appautoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppautoscalingPolicy <a name="AppautoscalingPolicy" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy aws_appautoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_id: str,
  scalable_dimension: str,
  service_namespace: str,
  id: str = None,
  policy_type: str = None,
  region: str = None,
  step_scaling_policy_configuration: AppautoscalingPolicyStepScalingPolicyConfiguration = None,
  target_tracking_scaling_policy_configuration: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scalableDimension">scalable_dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.serviceNamespace">service_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.stepScalingPolicyConfiguration">step_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | step_scaling_policy_configuration block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | target_tracking_scaling_policy_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.resourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}.

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.scalableDimension"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}.

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.serviceNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#region AppautoscalingPolicy#region}

---

##### `step_scaling_policy_configuration`<sup>Optional</sup> <a name="step_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.stepScalingPolicyConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

step_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}

---

##### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.Initializer.parameter.targetTrackingScalingPolicyConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

target_tracking_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration">put_step_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration">put_target_tracking_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration">reset_step_scaling_policy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration">reset_target_tracking_scaling_policy_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_step_scaling_policy_configuration` <a name="put_step_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration"></a>

```python
def put_step_scaling_policy_configuration(
  adjustment_type: str = None,
  cooldown: typing.Union[int, float] = None,
  metric_aggregation_type: str = None,
  min_adjustment_magnitude: typing.Union[int, float] = None,
  step_adjustment: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]] = None
) -> None
```

###### `adjustment_type`<sup>Optional</sup> <a name="adjustment_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.adjustmentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}.

---

###### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.cooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}.

---

###### `metric_aggregation_type`<sup>Optional</sup> <a name="metric_aggregation_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.metricAggregationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}.

---

###### `min_adjustment_magnitude`<sup>Optional</sup> <a name="min_adjustment_magnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.minAdjustmentMagnitude"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}.

---

###### `step_adjustment`<sup>Optional</sup> <a name="step_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putStepScalingPolicyConfiguration.parameter.stepAdjustment"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]

step_adjustment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#step_adjustment AppautoscalingPolicy#step_adjustment}

---

##### `put_target_tracking_scaling_policy_configuration` <a name="put_target_tracking_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration"></a>

```python
def put_target_tracking_scaling_policy_configuration(
  target_value: typing.Union[int, float],
  customized_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification = None,
  disable_scale_in: typing.Union[bool, IResolvable] = None,
  predefined_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None
) -> None
```

###### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.targetValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}.

---

###### `customized_metric_specification`<sup>Optional</sup> <a name="customized_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.customizedMetricSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

customized_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}

---

###### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.disableScaleIn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}.

---

###### `predefined_metric_specification`<sup>Optional</sup> <a name="predefined_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.predefinedMetricSpecification"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

predefined_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}

---

###### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.scaleInCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}.

---

###### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.putTargetTrackingScalingPolicyConfiguration.parameter.scaleOutCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_step_scaling_policy_configuration` <a name="reset_step_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetStepScalingPolicyConfiguration"></a>

```python
def reset_step_scaling_policy_configuration() -> None
```

##### `reset_target_tracking_scaling_policy_configuration` <a name="reset_target_tracking_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.resetTargetTrackingScalingPolicyConfiguration"></a>

```python
def reset_target_tracking_scaling_policy_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppautoscalingPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicy.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppautoscalingPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppautoscalingPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppautoscalingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppautoscalingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns">alarm_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration">step_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput">scalable_dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput">service_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput">step_scaling_policy_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput">target_tracking_scaling_policy_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alarm_arns`<sup>Required</sup> <a name="alarm_arns" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.alarmArns"></a>

```python
alarm_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `step_scaling_policy_configuration`<sup>Required</sup> <a name="step_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfiguration"></a>

```python
step_scaling_policy_configuration: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference">AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference</a>

---

##### `target_tracking_scaling_policy_configuration`<sup>Required</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `scalable_dimension_input`<sup>Optional</sup> <a name="scalable_dimension_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimensionInput"></a>

```python
scalable_dimension_input: str
```

- *Type:* str

---

##### `service_namespace_input`<sup>Optional</sup> <a name="service_namespace_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespaceInput"></a>

```python
service_namespace_input: str
```

- *Type:* str

---

##### `step_scaling_policy_configuration_input`<sup>Optional</sup> <a name="step_scaling_policy_configuration_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.stepScalingPolicyConfigurationInput"></a>

```python
step_scaling_policy_configuration_input: AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---

##### `target_tracking_scaling_policy_configuration_input`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.targetTrackingScalingPolicyConfigurationInput"></a>

```python
target_tracking_scaling_policy_configuration_input: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppautoscalingPolicyConfig <a name="AppautoscalingPolicyConfig" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_id: str,
  scalable_dimension: str,
  service_namespace: str,
  id: str = None,
  policy_type: str = None,
  region: str = None,
  step_scaling_policy_configuration: AppautoscalingPolicyStepScalingPolicyConfiguration = None,
  target_tracking_scaling_policy_configuration: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId">resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration">step_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | step_scaling_policy_configuration block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration">target_tracking_scaling_policy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | target_tracking_scaling_policy_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_id AppautoscalingPolicy#resource_id}.

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scalable_dimension AppautoscalingPolicy#scalable_dimension}.

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#service_namespace AppautoscalingPolicy#service_namespace}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#policy_type AppautoscalingPolicy#policy_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#region AppautoscalingPolicy#region}

---

##### `step_scaling_policy_configuration`<sup>Optional</sup> <a name="step_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.stepScalingPolicyConfiguration"></a>

```python
step_scaling_policy_configuration: AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

step_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}

---

##### `target_tracking_scaling_policy_configuration`<sup>Optional</sup> <a name="target_tracking_scaling_policy_configuration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyConfig.property.targetTrackingScalingPolicyConfiguration"></a>

```python
target_tracking_scaling_policy_configuration: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

target_tracking_scaling_policy_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}

---

### AppautoscalingPolicyStepScalingPolicyConfiguration <a name="AppautoscalingPolicyStepScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration(
  adjustment_type: str = None,
  cooldown: typing.Union[int, float] = None,
  metric_aggregation_type: str = None,
  min_adjustment_magnitude: typing.Union[int, float] = None,
  step_adjustment: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType">adjustment_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType">metric_aggregation_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude">min_adjustment_magnitude</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment">step_adjustment</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]</code> | step_adjustment block. |

---

##### `adjustment_type`<sup>Optional</sup> <a name="adjustment_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.adjustmentType"></a>

```python
adjustment_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#adjustment_type AppautoscalingPolicy#adjustment_type}.

---

##### `cooldown`<sup>Optional</sup> <a name="cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#cooldown AppautoscalingPolicy#cooldown}.

---

##### `metric_aggregation_type`<sup>Optional</sup> <a name="metric_aggregation_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.metricAggregationType"></a>

```python
metric_aggregation_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}.

---

##### `min_adjustment_magnitude`<sup>Optional</sup> <a name="min_adjustment_magnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.minAdjustmentMagnitude"></a>

```python
min_adjustment_magnitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}.

---

##### `step_adjustment`<sup>Optional</sup> <a name="step_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration.property.stepAdjustment"></a>

```python
step_adjustment: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]

step_adjustment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#step_adjustment AppautoscalingPolicy#step_adjustment}

---

### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment(
  scaling_adjustment: typing.Union[int, float],
  metric_interval_lower_bound: str = None,
  metric_interval_upper_bound: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound">metric_interval_lower_bound</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound">metric_interval_upper_bound</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}. |

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}.

---

##### `metric_interval_lower_bound`<sup>Optional</sup> <a name="metric_interval_lower_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalLowerBound"></a>

```python
metric_interval_lower_bound: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}.

---

##### `metric_interval_upper_bound`<sup>Optional</sup> <a name="metric_interval_upper_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment.property.metricIntervalUpperBound"></a>

```python
metric_interval_upper_bound: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration(
  target_value: typing.Union[int, float],
  customized_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification = None,
  disable_scale_in: typing.Union[bool, IResolvable] = None,
  predefined_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification = None,
  scale_in_cooldown: typing.Union[int, float] = None,
  scale_out_cooldown: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification">customized_metric_specification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | customized_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">disable_scale_in</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification">predefined_metric_specification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | predefined_metric_specification block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}. |

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#target_value AppautoscalingPolicy#target_value}.

---

##### `customized_metric_specification`<sup>Optional</sup> <a name="customized_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.customizedMetricSpecification"></a>

```python
customized_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

customized_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}

---

##### `disable_scale_in`<sup>Optional</sup> <a name="disable_scale_in" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```python
disable_scale_in: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#disable_scale_in AppautoscalingPolicy#disable_scale_in}.

---

##### `predefined_metric_specification`<sup>Optional</sup> <a name="predefined_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.predefinedMetricSpecification"></a>

```python
predefined_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

predefined_metric_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}

---

##### `scale_in_cooldown`<sup>Optional</sup> <a name="scale_in_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}.

---

##### `scale_out_cooldown`<sup>Optional</sup> <a name="scale_out_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification(
  dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]] = None,
  metric_name: str = None,
  metrics: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]] = None,
  namespace: str = None,
  statistic: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metrics">metrics</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]</code> | metrics block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic">statistic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}. |

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.metrics"></a>

```python
metrics: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metrics AppautoscalingPolicy#metrics}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics(
  id: str,
  expression: str = None,
  label: str = None,
  metric_stat: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat = None,
  return_data: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a></code> | metric_stat block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#id AppautoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#expression AppautoscalingPolicy#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#label AppautoscalingPolicy#label}.

---

##### `metric_stat`<sup>Optional</sup> <a name="metric_stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.metricStat"></a>

```python
metric_stat: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a>

metric_stat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_stat AppautoscalingPolicy#metric_stat}

---

##### `return_data`<sup>Optional</sup> <a name="return_data" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#return_data AppautoscalingPolicy#return_data}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat(
  metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric,
  stat: str,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.stat">stat</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.metric"></a>

```python
metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.stat"></a>

```python
stat: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric(
  metric_name: str,
  namespace: str,
  dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.dimensions">dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]</code> | dimensions block. |

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric.property.dimensions"></a>

```python
dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}.

---

### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification(
  predefined_metric_type: str,
  resource_label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel">resource_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}. |

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}.

---

##### `resource_label`<sup>Optional</sup> <a name="resource_label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment">put_step_adjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType">reset_adjustment_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown">reset_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType">reset_metric_aggregation_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude">reset_min_adjustment_magnitude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment">reset_step_adjustment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_step_adjustment` <a name="put_step_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment"></a>

```python
def put_step_adjustment(
  value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.putStepAdjustment.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]

---

##### `reset_adjustment_type` <a name="reset_adjustment_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetAdjustmentType"></a>

```python
def reset_adjustment_type() -> None
```

##### `reset_cooldown` <a name="reset_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetCooldown"></a>

```python
def reset_cooldown() -> None
```

##### `reset_metric_aggregation_type` <a name="reset_metric_aggregation_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMetricAggregationType"></a>

```python
def reset_metric_aggregation_type() -> None
```

##### `reset_min_adjustment_magnitude` <a name="reset_min_adjustment_magnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetMinAdjustmentMagnitude"></a>

```python
def reset_min_adjustment_magnitude() -> None
```

##### `reset_step_adjustment` <a name="reset_step_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.resetStepAdjustment"></a>

```python
def reset_step_adjustment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment">step_adjustment</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput">adjustment_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput">cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput">metric_aggregation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput">min_adjustment_magnitude_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput">step_adjustment_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType">adjustment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown">cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType">metric_aggregation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude">min_adjustment_magnitude</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `step_adjustment`<sup>Required</sup> <a name="step_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustment"></a>

```python
step_adjustment: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList</a>

---

##### `adjustment_type_input`<sup>Optional</sup> <a name="adjustment_type_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentTypeInput"></a>

```python
adjustment_type_input: str
```

- *Type:* str

---

##### `cooldown_input`<sup>Optional</sup> <a name="cooldown_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldownInput"></a>

```python
cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_aggregation_type_input`<sup>Optional</sup> <a name="metric_aggregation_type_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationTypeInput"></a>

```python
metric_aggregation_type_input: str
```

- *Type:* str

---

##### `min_adjustment_magnitude_input`<sup>Optional</sup> <a name="min_adjustment_magnitude_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitudeInput"></a>

```python
min_adjustment_magnitude_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `step_adjustment_input`<sup>Optional</sup> <a name="step_adjustment_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.stepAdjustmentInput"></a>

```python
step_adjustment_input: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]

---

##### `adjustment_type`<sup>Required</sup> <a name="adjustment_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.adjustmentType"></a>

```python
adjustment_type: str
```

- *Type:* str

---

##### `cooldown`<sup>Required</sup> <a name="cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.cooldown"></a>

```python
cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_aggregation_type`<sup>Required</sup> <a name="metric_aggregation_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.metricAggregationType"></a>

```python
metric_aggregation_type: str
```

- *Type:* str

---

##### `min_adjustment_magnitude`<sup>Required</sup> <a name="min_adjustment_magnitude" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.minAdjustmentMagnitude"></a>

```python
min_adjustment_magnitude: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyStepScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfiguration">AppautoscalingPolicyStepScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]]

---


### AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference <a name="AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound">reset_metric_interval_lower_bound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound">reset_metric_interval_upper_bound</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_interval_lower_bound` <a name="reset_metric_interval_lower_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalLowerBound"></a>

```python
def reset_metric_interval_lower_bound() -> None
```

##### `reset_metric_interval_upper_bound` <a name="reset_metric_interval_upper_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.resetMetricIntervalUpperBound"></a>

```python
def reset_metric_interval_upper_bound() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput">metric_interval_lower_bound_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput">metric_interval_upper_bound_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput">scaling_adjustment_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound">metric_interval_lower_bound</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound">metric_interval_upper_bound</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment">scaling_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_interval_lower_bound_input`<sup>Optional</sup> <a name="metric_interval_lower_bound_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBoundInput"></a>

```python
metric_interval_lower_bound_input: str
```

- *Type:* str

---

##### `metric_interval_upper_bound_input`<sup>Optional</sup> <a name="metric_interval_upper_bound_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBoundInput"></a>

```python
metric_interval_upper_bound_input: str
```

- *Type:* str

---

##### `scaling_adjustment_input`<sup>Optional</sup> <a name="scaling_adjustment_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustmentInput"></a>

```python
scaling_adjustment_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_interval_lower_bound`<sup>Required</sup> <a name="metric_interval_lower_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalLowerBound"></a>

```python
metric_interval_lower_bound: str
```

- *Type:* str

---

##### `metric_interval_upper_bound`<sup>Required</sup> <a name="metric_interval_upper_bound" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.metricIntervalUpperBound"></a>

```python
metric_interval_upper_bound: str
```

- *Type:* str

---

##### `scaling_adjustment`<sup>Required</sup> <a name="scaling_adjustment" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.scalingAdjustment"></a>

```python
scaling_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment">AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment</a>]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensions"></a>

```python
dimensions: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.putMetric">put_metric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric` <a name="put_metric" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.putMetric"></a>

```python
def put_metric(
  metric_name: str,
  namespace: str,
  dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions]] = None
) -> None
```

###### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.putMetric.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.putMetric.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.putMetric.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metricInput">metric_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.statInput">stat_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat">stat</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metric"></a>

```python
metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference</a>

---

##### `metric_input`<sup>Optional</sup> <a name="metric_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.metricInput"></a>

```python
metric_input: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

---

##### `stat_input`<sup>Optional</sup> <a name="stat_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.statInput"></a>

```python
stat_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.stat"></a>

```python
stat: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.putMetricStat">put_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetMetricStat">reset_metric_stat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetReturnData">reset_return_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metric_stat` <a name="put_metric_stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.putMetricStat"></a>

```python
def put_metric_stat(
  metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric,
  stat: str,
  unit: str = None
) -> None
```

###### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.putMetricStat.parameter.metric"></a>

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric AppautoscalingPolicy#metric}

---

###### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.putMetricStat.parameter.stat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#stat AppautoscalingPolicy#stat}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.putMetricStat.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_metric_stat` <a name="reset_metric_stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetMetricStat"></a>

```python
def reset_metric_stat() -> None
```

##### `reset_return_data` <a name="reset_return_data" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.resetReturnData"></a>

```python
def reset_return_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat">metric_stat</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStatInput">metric_stat_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnDataInput">return_data_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData">return_data</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_stat`<sup>Required</sup> <a name="metric_stat" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStat"></a>

```python
metric_stat: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference</a>

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `metric_stat_input`<sup>Optional</sup> <a name="metric_stat_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.metricStatInput"></a>

```python
metric_stat_input: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat</a>

---

##### `return_data_input`<sup>Optional</sup> <a name="return_data_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnDataInput"></a>

```python
return_data_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `return_data`<sup>Required</sup> <a name="return_data" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.returnData"></a>

```python
return_data: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions">put_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putMetrics">put_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetMetrics">reset_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetStatistic">reset_statistic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dimensions` <a name="put_dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions"></a>

```python
def put_dimensions(
  value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]

---

##### `put_metrics` <a name="put_metrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putMetrics"></a>

```python
def put_metrics(
  value: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.putMetrics.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]

---

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_metrics` <a name="reset_metrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetMetrics"></a>

```python
def reset_metrics() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_statistic` <a name="reset_statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetStatistic"></a>

```python
def reset_statistic() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricsInput">metrics_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput">statistic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensions"></a>

```python
dimensions: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metrics"></a>

```python
metrics: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metrics_input`<sup>Optional</sup> <a name="metrics_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricsInput"></a>

```python
metrics_input: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `statistic_input`<sup>Optional</sup> <a name="statistic_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statisticInput"></a>

```python
statistic_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification">put_customized_metric_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification">put_predefined_metric_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification">reset_customized_metric_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">reset_disable_scale_in</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification">reset_predefined_metric_specification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">reset_scale_in_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">reset_scale_out_cooldown</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_customized_metric_specification` <a name="put_customized_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification"></a>

```python
def put_customized_metric_specification(
  dimensions: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions]] = None,
  metric_name: str = None,
  metrics: typing.Union[IResolvable, typing.List[AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics]] = None,
  namespace: str = None,
  statistic: str = None,
  unit: str = None
) -> None
```

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.dimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions</a>]]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#dimensions AppautoscalingPolicy#dimensions}

---

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metric_name AppautoscalingPolicy#metric_name}.

---

###### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.metrics"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics</a>]]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#metrics AppautoscalingPolicy#metrics}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#namespace AppautoscalingPolicy#namespace}.

---

###### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.statistic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#statistic AppautoscalingPolicy#statistic}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putCustomizedMetricSpecification.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#unit AppautoscalingPolicy#unit}.

---

##### `put_predefined_metric_specification` <a name="put_predefined_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification"></a>

```python
def put_predefined_metric_specification(
  predefined_metric_type: str,
  resource_label: str = None
) -> None
```

###### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification.parameter.predefinedMetricType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}.

---

###### `resource_label`<sup>Optional</sup> <a name="resource_label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.putPredefinedMetricSpecification.parameter.resourceLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appautoscaling_policy#resource_label AppautoscalingPolicy#resource_label}.

---

##### `reset_customized_metric_specification` <a name="reset_customized_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetCustomizedMetricSpecification"></a>

```python
def reset_customized_metric_specification() -> None
```

##### `reset_disable_scale_in` <a name="reset_disable_scale_in" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```python
def reset_disable_scale_in() -> None
```

##### `reset_predefined_metric_specification` <a name="reset_predefined_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetPredefinedMetricSpecification"></a>

```python
def reset_predefined_metric_specification() -> None
```

##### `reset_scale_in_cooldown` <a name="reset_scale_in_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```python
def reset_scale_in_cooldown() -> None
```

##### `reset_scale_out_cooldown` <a name="reset_scale_out_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```python
def reset_scale_out_cooldown() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification">customized_metric_specification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification">predefined_metric_specification</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput">customized_metric_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">disable_scale_in_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput">predefined_metric_specification_input</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">scale_in_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">scale_out_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">target_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">disable_scale_in</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">scale_in_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">scale_out_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">target_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customized_metric_specification`<sup>Required</sup> <a name="customized_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecification"></a>

```python
customized_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference</a>

---

##### `predefined_metric_specification`<sup>Required</sup> <a name="predefined_metric_specification" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecification"></a>

```python
predefined_metric_specification: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference</a>

---

##### `customized_metric_specification_input`<sup>Optional</sup> <a name="customized_metric_specification_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.customizedMetricSpecificationInput"></a>

```python
customized_metric_specification_input: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification</a>

---

##### `disable_scale_in_input`<sup>Optional</sup> <a name="disable_scale_in_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```python
disable_scale_in_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `predefined_metric_specification_input`<sup>Optional</sup> <a name="predefined_metric_specification_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.predefinedMetricSpecificationInput"></a>

```python
predefined_metric_specification_input: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---

##### `scale_in_cooldown_input`<sup>Optional</sup> <a name="scale_in_cooldown_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```python
scale_in_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown_input`<sup>Optional</sup> <a name="scale_out_cooldown_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```python
scale_out_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value_input`<sup>Optional</sup> <a name="target_value_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```python
target_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_scale_in`<sup>Required</sup> <a name="disable_scale_in" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```python
disable_scale_in: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scale_in_cooldown`<sup>Required</sup> <a name="scale_in_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```python
scale_in_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scale_out_cooldown`<sup>Required</sup> <a name="scale_out_cooldown" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```python
scale_out_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_value`<sup>Required</sup> <a name="target_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```python
target_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration">AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference <a name="AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appautoscaling_policy

appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel">reset_resource_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource_label` <a name="reset_resource_label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.resetResourceLabel"></a>

```python
def reset_resource_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput">predefined_metric_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput">resource_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType">predefined_metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel">resource_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_metric_type_input`<sup>Optional</sup> <a name="predefined_metric_type_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricTypeInput"></a>

```python
predefined_metric_type_input: str
```

- *Type:* str

---

##### `resource_label_input`<sup>Optional</sup> <a name="resource_label_input" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabelInput"></a>

```python
resource_label_input: str
```

- *Type:* str

---

##### `predefined_metric_type`<sup>Required</sup> <a name="predefined_metric_type" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.predefinedMetricType"></a>

```python
predefined_metric_type: str
```

- *Type:* str

---

##### `resource_label`<sup>Required</sup> <a name="resource_label" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.resourceLabel"></a>

```python
resource_label: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
```

- *Type:* <a href="#@cdktf/provider-aws.appautoscalingPolicy.AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification">AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification</a>

---



