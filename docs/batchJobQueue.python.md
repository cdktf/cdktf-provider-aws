# `batchJobQueue` Submodule <a name="`batchJobQueue` Submodule" id="@cdktf/provider-aws.batchJobQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchJobQueue <a name="BatchJobQueue" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue aws_batch_job_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueue(
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
  priority: typing.Union[int, float],
  state: str,
  compute_environment_order: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]] = None,
  job_state_time_limit_action: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]] = None,
  region: str = None,
  scheduling_policy_arn: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BatchJobQueueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#name BatchJobQueue#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder">compute_environment_order</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]</code> | compute_environment_order block. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitAction">job_state_time_limit_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]</code> | job_state_time_limit_action block. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#name BatchJobQueue#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `compute_environment_order`<sup>Optional</sup> <a name="compute_environment_order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.computeEnvironmentOrder"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]

compute_environment_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}

---

##### `job_state_time_limit_action`<sup>Optional</sup> <a name="job_state_time_limit_action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.jobStateTimeLimitAction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]

job_state_time_limit_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#job_state_time_limit_action BatchJobQueue#job_state_time_limit_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#region BatchJobQueue#region}

---

##### `scheduling_policy_arn`<sup>Optional</sup> <a name="scheduling_policy_arn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.schedulingPolicyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#timeouts BatchJobQueue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder">put_compute_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction">put_job_state_time_limit_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder">reset_compute_environment_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitAction">reset_job_state_time_limit_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn">reset_scheduling_policy_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_environment_order` <a name="put_compute_environment_order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder"></a>

```python
def put_compute_environment_order(
  value: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putComputeEnvironmentOrder.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]

---

##### `put_job_state_time_limit_action` <a name="put_job_state_time_limit_action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction"></a>

```python
def put_job_state_time_limit_action(
  value: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putJobStateTimeLimitAction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#create BatchJobQueue#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#delete BatchJobQueue#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#update BatchJobQueue#update}

---

##### `reset_compute_environment_order` <a name="reset_compute_environment_order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetComputeEnvironmentOrder"></a>

```python
def reset_compute_environment_order() -> None
```

##### `reset_job_state_time_limit_action` <a name="reset_job_state_time_limit_action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetJobStateTimeLimitAction"></a>

```python
def reset_job_state_time_limit_action() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scheduling_policy_arn` <a name="reset_scheduling_policy_arn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetSchedulingPolicyArn"></a>

```python
def reset_scheduling_policy_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BatchJobQueue resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BatchJobQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BatchJobQueue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BatchJobQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BatchJobQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder">compute_environment_order</a></code> | <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitAction">job_state_time_limit_action</a></code> | <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList">BatchJobQueueJobStateTimeLimitActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference">BatchJobQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput">compute_environment_order_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionInput">job_state_time_limit_action_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput">scheduling_policy_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compute_environment_order`<sup>Required</sup> <a name="compute_environment_order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrder"></a>

```python
compute_environment_order: BatchJobQueueComputeEnvironmentOrderList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList">BatchJobQueueComputeEnvironmentOrderList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_state_time_limit_action`<sup>Required</sup> <a name="job_state_time_limit_action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitAction"></a>

```python
job_state_time_limit_action: BatchJobQueueJobStateTimeLimitActionList
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList">BatchJobQueueJobStateTimeLimitActionList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.timeouts"></a>

```python
timeouts: BatchJobQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference">BatchJobQueueTimeoutsOutputReference</a>

---

##### `compute_environment_order_input`<sup>Optional</sup> <a name="compute_environment_order_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.computeEnvironmentOrderInput"></a>

```python
compute_environment_order_input: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]

---

##### `job_state_time_limit_action_input`<sup>Optional</sup> <a name="job_state_time_limit_action_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.jobStateTimeLimitActionInput"></a>

```python
job_state_time_limit_action_input: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduling_policy_arn_input`<sup>Optional</sup> <a name="scheduling_policy_arn_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArnInput"></a>

```python
scheduling_policy_arn_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BatchJobQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scheduling_policy_arn`<sup>Required</sup> <a name="scheduling_policy_arn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.schedulingPolicyArn"></a>

```python
scheduling_policy_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BatchJobQueueComputeEnvironmentOrder <a name="BatchJobQueueComputeEnvironmentOrder" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrder(
  compute_environment: str,
  order: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment">compute_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order">order</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#order BatchJobQueue#order}. |

---

##### `compute_environment`<sup>Required</sup> <a name="compute_environment" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.computeEnvironment"></a>

```python
compute_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#compute_environment BatchJobQueue#compute_environment}.

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#order BatchJobQueue#order}.

---

### BatchJobQueueConfig <a name="BatchJobQueueConfig" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  priority: typing.Union[int, float],
  state: str,
  compute_environment_order: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]] = None,
  job_state_time_limit_action: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]] = None,
  region: str = None,
  scheduling_policy_arn: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BatchJobQueueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#name BatchJobQueue#name}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder">compute_environment_order</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]</code> | compute_environment_order block. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitAction">job_state_time_limit_action</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]</code> | job_state_time_limit_action block. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn">scheduling_policy_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#name BatchJobQueue#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#priority BatchJobQueue#priority}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

##### `compute_environment_order`<sup>Optional</sup> <a name="compute_environment_order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.computeEnvironmentOrder"></a>

```python
compute_environment_order: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]

compute_environment_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#compute_environment_order BatchJobQueue#compute_environment_order}

---

##### `job_state_time_limit_action`<sup>Optional</sup> <a name="job_state_time_limit_action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.jobStateTimeLimitAction"></a>

```python
job_state_time_limit_action: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]

job_state_time_limit_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#job_state_time_limit_action BatchJobQueue#job_state_time_limit_action}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#region BatchJobQueue#region}

---

##### `scheduling_policy_arn`<sup>Optional</sup> <a name="scheduling_policy_arn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.schedulingPolicyArn"></a>

```python
scheduling_policy_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#scheduling_policy_arn BatchJobQueue#scheduling_policy_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#tags BatchJobQueue#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueConfig.property.timeouts"></a>

```python
timeouts: BatchJobQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#timeouts BatchJobQueue#timeouts}

---

### BatchJobQueueJobStateTimeLimitAction <a name="BatchJobQueueJobStateTimeLimitAction" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitAction(
  action: str,
  max_time_seconds: typing.Union[int, float],
  reason: str,
  state: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#action BatchJobQueue#action}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.maxTimeSeconds">max_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.reason">reason</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#action BatchJobQueue#action}.

---

##### `max_time_seconds`<sup>Required</sup> <a name="max_time_seconds" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.maxTimeSeconds"></a>

```python
max_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#max_time_seconds BatchJobQueue#max_time_seconds}.

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.reason"></a>

```python
reason: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#reason BatchJobQueue#reason}.

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#state BatchJobQueue#state}.

---

### BatchJobQueueTimeouts <a name="BatchJobQueueTimeouts" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#create BatchJobQueue#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#delete BatchJobQueue#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/batch_job_queue#update BatchJobQueue#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BatchJobQueueComputeEnvironmentOrderList <a name="BatchJobQueueComputeEnvironmentOrderList" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobQueueComputeEnvironmentOrderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobQueueComputeEnvironmentOrder]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]]

---


### BatchJobQueueComputeEnvironmentOrderOutputReference <a name="BatchJobQueueComputeEnvironmentOrderOutputReference" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput">compute_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput">order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment">compute_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_environment_input`<sup>Optional</sup> <a name="compute_environment_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironmentInput"></a>

```python
compute_environment_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.orderInput"></a>

```python
order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compute_environment`<sup>Required</sup> <a name="compute_environment" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.computeEnvironment"></a>

```python
compute_environment: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobQueueComputeEnvironmentOrder]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueComputeEnvironmentOrder">BatchJobQueueComputeEnvironmentOrder</a>]

---


### BatchJobQueueJobStateTimeLimitActionList <a name="BatchJobQueueJobStateTimeLimitActionList" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BatchJobQueueJobStateTimeLimitActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BatchJobQueueJobStateTimeLimitAction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]]

---


### BatchJobQueueJobStateTimeLimitActionOutputReference <a name="BatchJobQueueJobStateTimeLimitActionOutputReference" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSecondsInput">max_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reasonInput">reason_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSeconds">max_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `max_time_seconds_input`<sup>Optional</sup> <a name="max_time_seconds_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSecondsInput"></a>

```python
max_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason_input`<sup>Optional</sup> <a name="reason_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reasonInput"></a>

```python
reason_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `max_time_seconds`<sup>Required</sup> <a name="max_time_seconds" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.maxTimeSeconds"></a>

```python
max_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitActionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobQueueJobStateTimeLimitAction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueJobStateTimeLimitAction">BatchJobQueueJobStateTimeLimitAction</a>]

---


### BatchJobQueueTimeoutsOutputReference <a name="BatchJobQueueTimeoutsOutputReference" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import batch_job_queue

batchJobQueue.BatchJobQueueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BatchJobQueueTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.batchJobQueue.BatchJobQueueTimeouts">BatchJobQueueTimeouts</a>]

---



