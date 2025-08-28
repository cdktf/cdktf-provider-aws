# `dataAwsPrometheusWorkspaces` Submodule <a name="`dataAwsPrometheusWorkspaces` Submodule" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsPrometheusWorkspaces <a name="DataAwsPrometheusWorkspaces" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces aws_prometheus_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias_prefix: str = None,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.aliasPrefix">alias_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#alias_prefix DataAwsPrometheusWorkspaces#alias_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#id DataAwsPrometheusWorkspaces#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_prefix`<sup>Optional</sup> <a name="alias_prefix" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.aliasPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#alias_prefix DataAwsPrometheusWorkspaces#alias_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#id DataAwsPrometheusWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#region DataAwsPrometheusWorkspaces#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetAliasPrefix">reset_alias_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_alias_prefix` <a name="reset_alias_prefix" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetAliasPrefix"></a>

```python
def reset_alias_prefix() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsPrometheusWorkspaces resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsPrometheusWorkspaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsPrometheusWorkspaces to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsPrometheusWorkspaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsPrometheusWorkspaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.arns">arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliasPrefixInput">alias_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliasPrefix">alias_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.arns"></a>

```python
arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alias_prefix_input`<sup>Optional</sup> <a name="alias_prefix_input" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliasPrefixInput"></a>

```python
alias_prefix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `alias_prefix`<sup>Required</sup> <a name="alias_prefix" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.aliasPrefix"></a>

```python
alias_prefix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspaces.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsPrometheusWorkspacesConfig <a name="DataAwsPrometheusWorkspacesConfig" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_prometheus_workspaces

dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias_prefix: str = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.aliasPrefix">alias_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#alias_prefix DataAwsPrometheusWorkspaces#alias_prefix}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#id DataAwsPrometheusWorkspaces#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias_prefix`<sup>Optional</sup> <a name="alias_prefix" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.aliasPrefix"></a>

```python
alias_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#alias_prefix DataAwsPrometheusWorkspaces#alias_prefix}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#id DataAwsPrometheusWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsPrometheusWorkspaces.DataAwsPrometheusWorkspacesConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/data-sources/prometheus_workspaces#region DataAwsPrometheusWorkspaces#region}

---



