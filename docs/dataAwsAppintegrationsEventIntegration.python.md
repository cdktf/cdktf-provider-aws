# `dataAwsAppintegrationsEventIntegration` Submodule <a name="`dataAwsAppintegrationsEventIntegration` Submodule" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAppintegrationsEventIntegration <a name="DataAwsAppintegrationsEventIntegration" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration aws_appintegrations_event_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration(
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
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsAppintegrationsEventIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsAppintegrationsEventIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsAppintegrationsEventIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus">eventbridge_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter">event_filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `eventbridge_bus`<sup>Required</sup> <a name="eventbridge_bus" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventbridgeBus"></a>

```python
eventbridge_bus: str
```

- *Type:* str

---

##### `event_filter`<sup>Required</sup> <a name="event_filter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.eventFilter"></a>

```python
event_filter: DataAwsAppintegrationsEventIntegrationEventFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList">DataAwsAppintegrationsEventIntegrationEventFilterList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAppintegrationsEventIntegrationConfig <a name="DataAwsAppintegrationsEventIntegrationConfig" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}.

---

### DataAwsAppintegrationsEventIntegrationEventFilter <a name="DataAwsAppintegrationsEventIntegrationEventFilter" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAppintegrationsEventIntegrationEventFilterList <a name="DataAwsAppintegrationsEventIntegrationEventFilterList" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsAppintegrationsEventIntegrationEventFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsAppintegrationsEventIntegrationEventFilterOutputReference <a name="DataAwsAppintegrationsEventIntegrationEventFilterOutputReference" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_appintegrations_event_integration

dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsAppintegrationsEventIntegrationEventFilter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsAppintegrationsEventIntegration.DataAwsAppintegrationsEventIntegrationEventFilter">DataAwsAppintegrationsEventIntegrationEventFilter</a>

---



