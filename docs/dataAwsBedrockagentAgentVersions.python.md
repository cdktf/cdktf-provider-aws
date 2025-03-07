# `dataAwsBedrockagentAgentVersions` Submodule <a name="`dataAwsBedrockagentAgentVersions` Submodule" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBedrockagentAgentVersions <a name="DataAwsBedrockagentAgentVersions" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  agent_version_summaries: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.agentVersionSummaries">agent_version_summaries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]</code> | agent_version_summaries block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}.

---

##### `agent_version_summaries`<sup>Optional</sup> <a name="agent_version_summaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.Initializer.parameter.agentVersionSummaries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]

agent_version_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries">put_agent_version_summaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries">reset_agent_version_summaries</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_agent_version_summaries` <a name="put_agent_version_summaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries"></a>

```python
def put_agent_version_summaries(
  value: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.putAgentVersionSummaries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]

---

##### `reset_agent_version_summaries` <a name="reset_agent_version_summaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.resetAgentVersionSummaries"></a>

```python
def reset_agent_version_summaries() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsBedrockagentAgentVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries">agent_version_summaries</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput">agent_version_summaries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_version_summaries`<sup>Required</sup> <a name="agent_version_summaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummaries"></a>

```python
agent_version_summaries: DataAwsBedrockagentAgentVersionsAgentVersionSummariesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `agent_version_summaries_input`<sup>Optional</sup> <a name="agent_version_summaries_input" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentVersionSummariesInput"></a>

```python
agent_version_summaries_input: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummaries <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries(
  guardrail_configuration: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration">guardrail_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]</code> | guardrail_configuration block. |

---

##### `guardrail_configuration`<sup>Optional</sup> <a name="guardrail_configuration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries.property.guardrailConfiguration"></a>

```python
guardrail_configuration: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]

guardrail_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}

---

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration()
```


### DataAwsBedrockagentAgentVersionsConfig <a name="DataAwsBedrockagentAgentVersionsConfig" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_id: str,
  agent_version_summaries: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries">agent_version_summaries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]</code> | agent_version_summaries block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}.

---

##### `agent_version_summaries`<sup>Optional</sup> <a name="agent_version_summaries" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsConfig.property.agentVersionSummaries"></a>

```python
agent_version_summaries: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]

agent_version_summaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier">guardrail_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion">guardrail_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `guardrail_identifier`<sup>Required</sup> <a name="guardrail_identifier" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailIdentifier"></a>

```python
guardrail_identifier: str
```

- *Type:* str

---

##### `guardrail_version`<sup>Required</sup> <a name="guardrail_version" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.guardrailVersion"></a>

```python
guardrail_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesList <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesList" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]]

---


### DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference <a name="DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_bedrockagent_agent_versions

dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration">put_guardrail_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration">reset_guardrail_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_guardrail_configuration` <a name="put_guardrail_configuration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration"></a>

```python
def put_guardrail_configuration(
  value: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.putGuardrailConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]

---

##### `reset_guardrail_configuration` <a name="reset_guardrail_configuration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.resetGuardrailConfiguration"></a>

```python
def reset_guardrail_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName">agent_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus">agent_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion">agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration">guardrail_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput">guardrail_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_name`<sup>Required</sup> <a name="agent_name" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentName"></a>

```python
agent_name: str
```

- *Type:* str

---

##### `agent_status`<sup>Required</sup> <a name="agent_status" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentStatus"></a>

```python
agent_status: str
```

- *Type:* str

---

##### `agent_version`<sup>Required</sup> <a name="agent_version" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.agentVersion"></a>

```python
agent_version: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `guardrail_configuration`<sup>Required</sup> <a name="guardrail_configuration" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfiguration"></a>

```python
guardrail_configuration: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `guardrail_configuration_input`<sup>Optional</sup> <a name="guardrail_configuration_input" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.guardrailConfigurationInput"></a>

```python
guardrail_configuration_input: typing.Union[IResolvable, typing.List[DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration">DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsBedrockagentAgentVersionsAgentVersionSummaries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsBedrockagentAgentVersions.DataAwsBedrockagentAgentVersionsAgentVersionSummaries">DataAwsBedrockagentAgentVersionsAgentVersionSummaries</a>]

---



