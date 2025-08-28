# `prometheusWorkspaceConfiguration` Submodule <a name="`prometheusWorkspaceConfiguration` Submodule" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusWorkspaceConfiguration <a name="PrometheusWorkspaceConfiguration" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration aws_prometheus_workspace_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  limits_per_label_set: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]] = None,
  region: str = None,
  retention_period_in_days: typing.Union[int, float] = None,
  timeouts: PrometheusWorkspaceConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.limitsPerLabelSet">limits_per_label_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]</code> | limits_per_label_set block. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}.

---

##### `limits_per_label_set`<sup>Optional</sup> <a name="limits_per_label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.limitsPerLabelSet"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]

limits_per_label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#limits_per_label_set PrometheusWorkspaceConfiguration#limits_per_label_set}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#region PrometheusWorkspaceConfiguration#region}

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#timeouts PrometheusWorkspaceConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet">put_limits_per_label_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetLimitsPerLabelSet">reset_limits_per_label_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_limits_per_label_set` <a name="put_limits_per_label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet"></a>

```python
def put_limits_per_label_set(
  value: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putLimitsPerLabelSet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#create PrometheusWorkspaceConfiguration#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#update PrometheusWorkspaceConfiguration#update}

---

##### `reset_limits_per_label_set` <a name="reset_limits_per_label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetLimitsPerLabelSet"></a>

```python
def reset_limits_per_label_set() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrometheusWorkspaceConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrometheusWorkspaceConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrometheusWorkspaceConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrometheusWorkspaceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusWorkspaceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSet">limits_per_label_set</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList">PrometheusWorkspaceConfigurationLimitsPerLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference">PrometheusWorkspaceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSetInput">limits_per_label_set_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `limits_per_label_set`<sup>Required</sup> <a name="limits_per_label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSet"></a>

```python
limits_per_label_set: PrometheusWorkspaceConfigurationLimitsPerLabelSetList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList">PrometheusWorkspaceConfigurationLimitsPerLabelSetList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeouts"></a>

```python
timeouts: PrometheusWorkspaceConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference">PrometheusWorkspaceConfigurationTimeoutsOutputReference</a>

---

##### `limits_per_label_set_input`<sup>Optional</sup> <a name="limits_per_label_set_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.limitsPerLabelSetInput"></a>

```python
limits_per_label_set_input: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrometheusWorkspaceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusWorkspaceConfigurationConfig <a name="PrometheusWorkspaceConfigurationConfig" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  limits_per_label_set: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]] = None,
  region: str = None,
  retention_period_in_days: typing.Union[int, float] = None,
  timeouts: PrometheusWorkspaceConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.limitsPerLabelSet">limits_per_label_set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]</code> | limits_per_label_set block. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}.

---

##### `limits_per_label_set`<sup>Optional</sup> <a name="limits_per_label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.limitsPerLabelSet"></a>

```python
limits_per_label_set: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]

limits_per_label_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#limits_per_label_set PrometheusWorkspaceConfiguration#limits_per_label_set}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#region PrometheusWorkspaceConfiguration#region}

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationConfig.property.timeouts"></a>

```python
timeouts: PrometheusWorkspaceConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#timeouts PrometheusWorkspaceConfiguration#timeouts}

---

### PrometheusWorkspaceConfigurationLimitsPerLabelSet <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSet" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet(
  label_set: typing.Mapping[str],
  limits: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.labelSet">label_set</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#label_set PrometheusWorkspaceConfiguration#label_set}. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.limits">limits</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]</code> | limits block. |

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.labelSet"></a>

```python
label_set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#label_set PrometheusWorkspaceConfiguration#label_set}.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet.property.limits"></a>

```python
limits: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#limits PrometheusWorkspaceConfiguration#limits}

---

### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits(
  max_series: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.property.maxSeries">max_series</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#max_series PrometheusWorkspaceConfiguration#max_series}. |

---

##### `max_series`<sup>Required</sup> <a name="max_series" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits.property.maxSeries"></a>

```python
max_series: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#max_series PrometheusWorkspaceConfiguration#max_series}.

---

### PrometheusWorkspaceConfigurationTimeouts <a name="PrometheusWorkspaceConfigurationTimeouts" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#create PrometheusWorkspaceConfiguration#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/prometheus_workspace_configuration#update PrometheusWorkspaceConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeriesInput">max_series_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeries">max_series</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_series_input`<sup>Optional</sup> <a name="max_series_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeriesInput"></a>

```python
max_series_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_series`<sup>Required</sup> <a name="max_series" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.maxSeries"></a>

```python
max_series: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetList <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetList" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]]

---


### PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference <a name="PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits">put_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resetLimits">reset_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_limits` <a name="put_limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits"></a>

```python
def put_limits(
  value: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.putLimits.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]

---

##### `reset_limits` <a name="reset_limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.resetLimits"></a>

```python
def reset_limits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limits">limits</a></code> | <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSetInput">label_set_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limitsInput">limits_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSet">label_set</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limits"></a>

```python
limits: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList</a>

---

##### `label_set_input`<sup>Optional</sup> <a name="label_set_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSetInput"></a>

```python
label_set_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `limits_input`<sup>Optional</sup> <a name="limits_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.limitsInput"></a>

```python
limits_input: typing.Union[IResolvable, typing.List[PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits">PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits</a>]]

---

##### `label_set`<sup>Required</sup> <a name="label_set" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.labelSet"></a>

```python
label_set: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusWorkspaceConfigurationLimitsPerLabelSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationLimitsPerLabelSet">PrometheusWorkspaceConfigurationLimitsPerLabelSet</a>]

---


### PrometheusWorkspaceConfigurationTimeoutsOutputReference <a name="PrometheusWorkspaceConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_workspace_configuration

prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusWorkspaceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusWorkspaceConfiguration.PrometheusWorkspaceConfigurationTimeouts">PrometheusWorkspaceConfigurationTimeouts</a>]

---



