# `dataAwsGrafanaWorkspace` Submodule <a name="`dataAwsGrafanaWorkspace` Submodule" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGrafanaWorkspace <a name="DataAwsGrafanaWorkspace" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace aws_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_grafana_workspace

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_grafana_workspace

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_grafana_workspace

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_grafana_workspace

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.accountAccessType">account_access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.authenticationProviders">authentication_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dataSources">data_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.grafanaVersion">grafana_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.notificationDestinations">notification_destinations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationalUnits">organizational_units</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationRoleName">organization_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.permissionType">permission_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.samlConfigurationStatus">saml_configuration_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.stackSetName">stack_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_access_type`<sup>Required</sup> <a name="account_access_type" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.accountAccessType"></a>

```python
account_access_type: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_providers`<sup>Required</sup> <a name="authentication_providers" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.authenticationProviders"></a>

```python
authentication_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `data_sources`<sup>Required</sup> <a name="data_sources" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.dataSources"></a>

```python
data_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `grafana_version`<sup>Required</sup> <a name="grafana_version" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.grafanaVersion"></a>

```python
grafana_version: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `notification_destinations`<sup>Required</sup> <a name="notification_destinations" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.notificationDestinations"></a>

```python
notification_destinations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organizational_units`<sup>Required</sup> <a name="organizational_units" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationalUnits"></a>

```python
organizational_units: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_role_name`<sup>Required</sup> <a name="organization_role_name" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.organizationRoleName"></a>

```python
organization_role_name: str
```

- *Type:* str

---

##### `permission_type`<sup>Required</sup> <a name="permission_type" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.permissionType"></a>

```python
permission_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `saml_configuration_status`<sup>Required</sup> <a name="saml_configuration_status" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.samlConfigurationStatus"></a>

```python
saml_configuration_status: str
```

- *Type:* str

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGrafanaWorkspaceConfig <a name="DataAwsGrafanaWorkspaceConfig" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_grafana_workspace

dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#workspace_id DataAwsGrafanaWorkspace#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#id DataAwsGrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGrafanaWorkspace.DataAwsGrafanaWorkspaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/grafana_workspace#tags DataAwsGrafanaWorkspace#tags}.

---



