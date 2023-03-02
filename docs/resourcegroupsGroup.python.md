# `resourcegroupsGroup` Submodule <a name="`resourcegroupsGroup` Submodule" id="@cdktf/provider-aws.resourcegroupsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsGroup <a name="ResourcegroupsGroup" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group aws_resourcegroups_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]] = None,
  description: str = None,
  id: str = None,
  resource_query: ResourcegroupsGroupResourceQuery = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ResourcegroupsGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#description ResourcegroupsGroup#description}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#id ResourcegroupsGroup#id}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery">resource_query</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | resource_query block. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags ResourcegroupsGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.configuration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#configuration ResourcegroupsGroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#description ResourcegroupsGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#id ResourcegroupsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_query`<sup>Optional</sup> <a name="resource_query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.resourceQuery"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

resource_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#timeouts ResourcegroupsGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery">put_resource_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery">reset_resource_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration"></a>

```python
def put_configuration(
  value: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]

---

##### `put_resource_query` <a name="put_resource_query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery"></a>

```python
def put_resource_query(
  query: str,
  type: str = None
) -> None
```

###### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery.parameter.query"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#query ResourcegroupsGroup#query}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#type ResourcegroupsGroup#type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#create ResourcegroupsGroup#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#update ResourcegroupsGroup#update}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_query` <a name="reset_resource_query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetResourceQuery"></a>

```python
def reset_resource_query() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery">resource_query</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference">ResourcegroupsGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput">configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput">resource_query_input</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configuration"></a>

```python
configuration: ResourcegroupsGroupConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList">ResourcegroupsGroupConfigurationList</a>

---

##### `resource_query`<sup>Required</sup> <a name="resource_query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery"></a>

```python
resource_query: ResourcegroupsGroupResourceQueryOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeouts"></a>

```python
timeouts: ResourcegroupsGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference">ResourcegroupsGroupTimeoutsOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.configurationInput"></a>

```python
configuration_input: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_query_input`<sup>Optional</sup> <a name="resource_query_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput"></a>

```python
resource_query_input: ResourcegroupsGroupResourceQuery
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ResourcegroupsGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsGroupConfig <a name="ResourcegroupsGroupConfig" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  configuration: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]] = None,
  description: str = None,
  id: str = None,
  resource_query: ResourcegroupsGroupResourceQuery = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ResourcegroupsGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration">configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#description ResourcegroupsGroup#description}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#id ResourcegroupsGroup#id}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery">resource_query</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | resource_query block. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags ResourcegroupsGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.configuration"></a>

```python
configuration: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#configuration ResourcegroupsGroup#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#description ResourcegroupsGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#id ResourcegroupsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_query`<sup>Optional</sup> <a name="resource_query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery"></a>

```python
resource_query: ResourcegroupsGroupResourceQuery
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

resource_query block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfig.property.timeouts"></a>

```python
timeouts: ResourcegroupsGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#timeouts ResourcegroupsGroup#timeouts}

---

### ResourcegroupsGroupConfiguration <a name="ResourcegroupsGroupConfiguration" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfiguration(
  type: str,
  parameters: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfigurationParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#type ResourcegroupsGroup#type}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]</code> | parameters block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#type ResourcegroupsGroup#type}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfigurationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]

parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#parameters ResourcegroupsGroup#parameters}

---

### ResourcegroupsGroupConfigurationParameters <a name="ResourcegroupsGroupConfigurationParameters" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#values ResourcegroupsGroup#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#values ResourcegroupsGroup#values}.

---

### ResourcegroupsGroupResourceQuery <a name="ResourcegroupsGroupResourceQuery" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupResourceQuery(
  query: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query">query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#query ResourcegroupsGroup#query}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#type ResourcegroupsGroup#type}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query"></a>

```python
query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#query ResourcegroupsGroup#query}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#type ResourcegroupsGroup#type}.

---

### ResourcegroupsGroupTimeouts <a name="ResourcegroupsGroupTimeouts" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#create ResourcegroupsGroup#create}. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#update ResourcegroupsGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#create ResourcegroupsGroup#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/resourcegroups_group#update ResourcegroupsGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcegroupsGroupConfigurationList <a name="ResourcegroupsGroupConfigurationList" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcegroupsGroupConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>]]

---


### ResourcegroupsGroupConfigurationOutputReference <a name="ResourcegroupsGroupConfigurationOutputReference" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfigurationParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parameters"></a>

```python
parameters: ResourcegroupsGroupConfigurationParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList">ResourcegroupsGroupConfigurationParametersList</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfigurationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ResourcegroupsGroupConfiguration, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfiguration">ResourcegroupsGroupConfiguration</a>, cdktf.IResolvable]

---


### ResourcegroupsGroupConfigurationParametersList <a name="ResourcegroupsGroupConfigurationParametersList" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ResourcegroupsGroupConfigurationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ResourcegroupsGroupConfigurationParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>]]

---


### ResourcegroupsGroupConfigurationParametersOutputReference <a name="ResourcegroupsGroupConfigurationParametersOutputReference" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ResourcegroupsGroupConfigurationParameters, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupConfigurationParameters">ResourcegroupsGroupConfigurationParameters</a>, cdktf.IResolvable]

---


### ResourcegroupsGroupResourceQueryOutputReference <a name="ResourcegroupsGroupResourceQueryOutputReference" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput">query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput"></a>

```python
query_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue"></a>

```python
internal_value: ResourcegroupsGroupResourceQuery
```

- *Type:* <a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---


### ResourcegroupsGroupTimeoutsOutputReference <a name="ResourcegroupsGroupTimeoutsOutputReference" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import resourcegroups_group

resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ResourcegroupsGroupTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.resourcegroupsGroup.ResourcegroupsGroupTimeouts">ResourcegroupsGroupTimeouts</a>, cdktf.IResolvable]

---



