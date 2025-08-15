# `prometheusQueryLoggingConfiguration` Submodule <a name="`prometheusQueryLoggingConfiguration` Submodule" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusQueryLoggingConfiguration <a name="PrometheusQueryLoggingConfiguration" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration aws_prometheus_query_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration(
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
  destination: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]] = None,
  region: str = None,
  timeouts: PrometheusQueryLoggingConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.destination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#destination PrometheusQueryLoggingConfiguration#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#region PrometheusQueryLoggingConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#timeouts PrometheusQueryLoggingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination"></a>

```python
def put_destination(
  value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#create PrometheusQueryLoggingConfiguration#create}

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#delete PrometheusQueryLoggingConfiguration#delete}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#update PrometheusQueryLoggingConfiguration#update}

---

##### `reset_destination` <a name="reset_destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrometheusQueryLoggingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrometheusQueryLoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrometheusQueryLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusQueryLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput">destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destination"></a>

```python
destination: PrometheusQueryLoggingConfigurationDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList">PrometheusQueryLoggingConfigurationDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeouts"></a>

```python
timeouts: PrometheusQueryLoggingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference">PrometheusQueryLoggingConfigurationTimeoutsOutputReference</a>

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.destinationInput"></a>

```python
destination_input: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrometheusQueryLoggingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusQueryLoggingConfigurationConfig <a name="PrometheusQueryLoggingConfigurationConfig" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  destination: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]] = None,
  region: str = None,
  timeouts: PrometheusQueryLoggingConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination">destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]</code> | destination block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#workspace_id PrometheusQueryLoggingConfiguration#workspace_id}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.destination"></a>

```python
destination: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#destination PrometheusQueryLoggingConfiguration#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#region PrometheusQueryLoggingConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationConfig.property.timeouts"></a>

```python
timeouts: PrometheusQueryLoggingConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#timeouts PrometheusQueryLoggingConfiguration#timeouts}

---

### PrometheusQueryLoggingConfigurationDestination <a name="PrometheusQueryLoggingConfigurationDestination" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination(
  cloudwatch_logs: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]] = None,
  filters: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationFilters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]</code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters">filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]</code> | filters block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#cloudwatch_logs PrometheusQueryLoggingConfiguration#cloudwatch_logs}

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination.property.filters"></a>

```python
filters: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#filters PrometheusQueryLoggingConfiguration#filters}

---

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs(
  log_group_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}. |

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#log_group_arn PrometheusQueryLoggingConfiguration#log_group_arn}.

---

### PrometheusQueryLoggingConfigurationDestinationFilters <a name="PrometheusQueryLoggingConfigurationDestinationFilters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters(
  qsp_threshold: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold">qsp_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}. |

---

##### `qsp_threshold`<sup>Required</sup> <a name="qsp_threshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters.property.qspThreshold"></a>

```python
qsp_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#qsp_threshold PrometheusQueryLoggingConfiguration#qsp_threshold}.

---

### PrometheusQueryLoggingConfigurationTimeouts <a name="PrometheusQueryLoggingConfigurationTimeouts" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#create PrometheusQueryLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#delete PrometheusQueryLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/prometheus_query_logging_configuration#update PrometheusQueryLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]

---


### PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]

---


### PrometheusQueryLoggingConfigurationDestinationFiltersList <a name="PrometheusQueryLoggingConfigurationDestinationFiltersList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]

---


### PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput">qsp_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold">qsp_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `qsp_threshold_input`<sup>Optional</sup> <a name="qsp_threshold_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThresholdInput"></a>

```python
qsp_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qsp_threshold`<sup>Required</sup> <a name="qsp_threshold" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.qspThreshold"></a>

```python
qsp_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusQueryLoggingConfigurationDestinationFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]

---


### PrometheusQueryLoggingConfigurationDestinationList <a name="PrometheusQueryLoggingConfigurationDestinationList" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PrometheusQueryLoggingConfigurationDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]]

---


### PrometheusQueryLoggingConfigurationDestinationOutputReference <a name="PrometheusQueryLoggingConfigurationDestinationOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters">reset_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters"></a>

```python
def put_filters(
  value: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.putFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.resetFilters"></a>

```python
def reset_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput">filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogsList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filters"></a>

```python
filters: PrometheusQueryLoggingConfigurationDestinationFiltersList
```

- *Type:* <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFiltersList">PrometheusQueryLoggingConfigurationDestinationFiltersList</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs">PrometheusQueryLoggingConfigurationDestinationCloudwatchLogs</a>]]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.filtersInput"></a>

```python
filters_input: typing.Union[IResolvable, typing.List[PrometheusQueryLoggingConfigurationDestinationFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationFilters">PrometheusQueryLoggingConfigurationDestinationFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusQueryLoggingConfigurationDestination]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationDestination">PrometheusQueryLoggingConfigurationDestination</a>]

---


### PrometheusQueryLoggingConfigurationTimeoutsOutputReference <a name="PrometheusQueryLoggingConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import prometheus_query_logging_configuration

prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrometheusQueryLoggingConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.prometheusQueryLoggingConfiguration.PrometheusQueryLoggingConfigurationTimeouts">PrometheusQueryLoggingConfigurationTimeouts</a>]

---



