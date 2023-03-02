# `dataAwsGlueScript` Submodule <a name="`dataAwsGlueScript` Submodule" id="@cdktf/provider-aws.dataAwsGlueScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueScript <a name="DataAwsGlueScript" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/glue_script aws_glue_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScript(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dag_edge: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]],
  dag_node: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]],
  id: str = None,
  language: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagEdge">dag_edge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]</code> | dag_edge block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagNode">dag_node</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]</code> | dag_node block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dag_edge`<sup>Required</sup> <a name="dag_edge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagEdge"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]

dag_edge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `dag_node`<sup>Required</sup> <a name="dag_node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.dagNode"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]

dag_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.Initializer.parameter.language"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge">put_dag_edge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode">put_dag_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage">reset_language</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dag_edge` <a name="put_dag_edge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge"></a>

```python
def put_dag_edge(
  value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagEdge.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]

---

##### `put_dag_node` <a name="put_dag_node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode"></a>

```python
def put_dag_node(
  value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.putDagNode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language` <a name="reset_language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.resetLanguage"></a>

```python
def reset_language() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScript.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge">dag_edge</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode">dag_node</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript">python_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode">scala_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput">dag_edge_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput">dag_node_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput">language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language">language</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dag_edge`<sup>Required</sup> <a name="dag_edge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdge"></a>

```python
dag_edge: DataAwsGlueScriptDagEdgeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList">DataAwsGlueScriptDagEdgeList</a>

---

##### `dag_node`<sup>Required</sup> <a name="dag_node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNode"></a>

```python
dag_node: DataAwsGlueScriptDagNodeList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList">DataAwsGlueScriptDagNodeList</a>

---

##### `python_script`<sup>Required</sup> <a name="python_script" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.pythonScript"></a>

```python
python_script: str
```

- *Type:* str

---

##### `scala_code`<sup>Required</sup> <a name="scala_code" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.scalaCode"></a>

```python
scala_code: str
```

- *Type:* str

---

##### `dag_edge_input`<sup>Optional</sup> <a name="dag_edge_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagEdgeInput"></a>

```python
dag_edge_input: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]

---

##### `dag_node_input`<sup>Optional</sup> <a name="dag_node_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.dagNodeInput"></a>

```python
dag_node_input: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `language_input`<sup>Optional</sup> <a name="language_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.languageInput"></a>

```python
language_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.language"></a>

```python
language: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueScriptConfig <a name="DataAwsGlueScriptConfig" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dag_edge: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]],
  dag_node: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]],
  id: str = None,
  language: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge">dag_edge</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]</code> | dag_edge block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode">dag_node</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]</code> | dag_node block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language">language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dag_edge`<sup>Required</sup> <a name="dag_edge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagEdge"></a>

```python
dag_edge: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]

dag_edge block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_edge DataAwsGlueScript#dag_edge}

---

##### `dag_node`<sup>Required</sup> <a name="dag_node" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.dagNode"></a>

```python
dag_node: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]

dag_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#dag_node DataAwsGlueScript#dag_node}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptConfig.property.language"></a>

```python
language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#language DataAwsGlueScript#language}.

---

### DataAwsGlueScriptDagEdge <a name="DataAwsGlueScriptDagEdge" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagEdge(
  source: str,
  target: str,
  target_parameter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target">target</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter">target_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#source DataAwsGlueScript#source}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.target"></a>

```python
target: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target DataAwsGlueScript#target}.

---

##### `target_parameter`<sup>Optional</sup> <a name="target_parameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge.property.targetParameter"></a>

```python
target_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#target_parameter DataAwsGlueScript#target_parameter}.

---

### DataAwsGlueScriptDagNode <a name="DataAwsGlueScriptDagNode" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNode(
  args: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNodeArgs]],
  id: str,
  node_type: str,
  line_number: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args">args</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]</code> | args block. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType">node_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber">line_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}. |

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.args"></a>

```python
args: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNodeArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]

args block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#args DataAwsGlueScript#args}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#id DataAwsGlueScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#node_type DataAwsGlueScript#node_type}.

---

##### `line_number`<sup>Optional</sup> <a name="line_number" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode.property.lineNumber"></a>

```python
line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#line_number DataAwsGlueScript#line_number}.

---

### DataAwsGlueScriptDagNodeArgs <a name="DataAwsGlueScriptDagNodeArgs" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs(
  name: str,
  value: str,
  param: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param">param</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#name DataAwsGlueScript#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#value DataAwsGlueScript#value}.

---

##### `param`<sup>Optional</sup> <a name="param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs.property.param"></a>

```python
param: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/glue_script#param DataAwsGlueScript#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueScriptDagEdgeList <a name="DataAwsGlueScriptDagEdgeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagEdgeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueScriptDagEdgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagEdge]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>]]

---


### DataAwsGlueScriptDagEdgeOutputReference <a name="DataAwsGlueScriptDagEdgeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter">reset_target_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_parameter` <a name="reset_target_parameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.resetTargetParameter"></a>

```python
def reset_target_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput">target_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter">target_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `target_parameter_input`<sup>Optional</sup> <a name="target_parameter_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameterInput"></a>

```python
target_parameter_input: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `target_parameter`<sup>Required</sup> <a name="target_parameter" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.targetParameter"></a>

```python
target_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdgeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsGlueScriptDagEdge, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagEdge">DataAwsGlueScriptDagEdge</a>, cdktf.IResolvable]

---


### DataAwsGlueScriptDagNodeArgsList <a name="DataAwsGlueScriptDagNodeArgsList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueScriptDagNodeArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNodeArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]

---


### DataAwsGlueScriptDagNodeArgsOutputReference <a name="DataAwsGlueScriptDagNodeArgsOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam">reset_param</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_param` <a name="reset_param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.resetParam"></a>

```python
def reset_param() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput">param_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param">param</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `param_input`<sup>Optional</sup> <a name="param_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.paramInput"></a>

```python
param_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.param"></a>

```python
param: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsGlueScriptDagNodeArgs, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>, cdktf.IResolvable]

---


### DataAwsGlueScriptDagNodeList <a name="DataAwsGlueScriptDagNodeList" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlueScriptDagNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>]]

---


### DataAwsGlueScriptDagNodeOutputReference <a name="DataAwsGlueScriptDagNodeOutputReference" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_glue_script

dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs">put_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber">reset_line_number</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_args` <a name="put_args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs"></a>

```python
def put_args(
  value: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNodeArgs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.putArgs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]

---

##### `reset_line_number` <a name="reset_line_number" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.resetLineNumber"></a>

```python
def reset_line_number() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args">args</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput">args_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput">line_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput">node_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber">line_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType">node_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.args"></a>

```python
args: DataAwsGlueScriptDagNodeArgsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgsList">DataAwsGlueScriptDagNodeArgsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.argsInput"></a>

```python
args_input: typing.Union[IResolvable, typing.List[DataAwsGlueScriptDagNodeArgs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeArgs">DataAwsGlueScriptDagNodeArgs</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `line_number_input`<sup>Optional</sup> <a name="line_number_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumberInput"></a>

```python
line_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type_input`<sup>Optional</sup> <a name="node_type_input" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeTypeInput"></a>

```python
node_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `line_number`<sup>Required</sup> <a name="line_number" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.lineNumber"></a>

```python
line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_type`<sup>Required</sup> <a name="node_type" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.nodeType"></a>

```python
node_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNodeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsGlueScriptDagNode, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsGlueScript.DataAwsGlueScriptDagNode">DataAwsGlueScriptDagNode</a>, cdktf.IResolvable]

---



