# `defaultRouteTable` Submodule <a name="`defaultRouteTable` Submodule" id="@cdktf/provider-aws.defaultRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultRouteTable <a name="DefaultRouteTable" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_route_table aws_default_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_route_table_id: str,
  id: str = None,
  propagating_vgws: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DefaultRouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.defaultRouteTableId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagating_vgws`<sup>Optional</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.propagatingVgws"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.route"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#timeouts DefaultRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws">reset_propagating_vgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_route` <a name="put_route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute"></a>

```python
def put_route(
  value: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putRoute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_propagating_vgws` <a name="reset_propagating_vgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws"></a>

```python
def reset_propagating_vgws() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput">default_route_table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput">propagating_vgws_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput">route_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.route"></a>

```python
route: DefaultRouteTableRouteList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeouts"></a>

```python
timeouts: DefaultRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `default_route_table_id_input`<sup>Optional</sup> <a name="default_route_table_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput"></a>

```python
default_route_table_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `propagating_vgws_input`<sup>Optional</sup> <a name="propagating_vgws_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput"></a>

```python
propagating_vgws_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.routeInput"></a>

```python
route_input: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DefaultRouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>, cdktf.IResolvable]

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId"></a>

```python
default_route_table_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `propagating_vgws`<sup>Required</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.propagatingVgws"></a>

```python
propagating_vgws: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultRouteTableConfig <a name="DefaultRouteTableConfig" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_route_table_id: str,
  id: str = None,
  propagating_vgws: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DefaultRouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId">default_route_table_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_route_table_id`<sup>Required</sup> <a name="default_route_table_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId"></a>

```python
default_route_table_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagating_vgws`<sup>Optional</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws"></a>

```python
propagating_vgws: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.route"></a>

```python
route: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#route DefaultRouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags DefaultRouteTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableConfig.property.timeouts"></a>

```python
timeouts: DefaultRouteTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#timeouts DefaultRouteTable#timeouts}

---

### DefaultRouteTableRoute <a name="DefaultRouteTableRoute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableRoute(
  cidr_block: str = None,
  core_network_arn: str = None,
  destination_prefix_list_id: str = None,
  egress_only_gateway_id: str = None,
  gateway_id: str = None,
  instance_id: str = None,
  ipv6_cidr_block: str = None,
  nat_gateway_id: str = None,
  network_interface_id: str = None,
  transit_gateway_id: str = None,
  vpc_endpoint_id: str = None,
  vpc_peering_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}. |

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#cidr_block DefaultRouteTable#cidr_block}.

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}.

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}.

---

##### `egress_only_gateway_id`<sup>Optional</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#gateway_id DefaultRouteTable#gateway_id}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#instance_id DefaultRouteTable#instance_id}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}.

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}.

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}.

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}.

---

### DefaultRouteTableTimeouts <a name="DefaultRouteTableTimeouts" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#create DefaultRouteTable#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_route_table#update DefaultRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultRouteTableRouteList <a name="DefaultRouteTableRouteList" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultRouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultRouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>]]

---


### DefaultRouteTableRouteOutputReference <a name="DefaultRouteTableRouteOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn">reset_core_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId">reset_destination_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId">reset_egress_only_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId">reset_nat_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId">reset_vpc_peering_connection_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_core_network_arn` <a name="reset_core_network_arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```python
def reset_core_network_arn() -> None
```

##### `reset_destination_prefix_list_id` <a name="reset_destination_prefix_list_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```python
def reset_destination_prefix_list_id() -> None
```

##### `reset_egress_only_gateway_id` <a name="reset_egress_only_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```python
def reset_egress_only_gateway_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_nat_gateway_id` <a name="reset_nat_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId"></a>

```python
def reset_nat_gateway_id() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

##### `reset_vpc_peering_connection_id` <a name="reset_vpc_peering_connection_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```python
def reset_vpc_peering_connection_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput">core_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput">destination_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egress_only_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `core_network_arn_input`<sup>Optional</sup> <a name="core_network_arn_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```python
core_network_arn_input: str
```

- *Type:* str

---

##### `destination_prefix_list_id_input`<sup>Optional</sup> <a name="destination_prefix_list_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```python
destination_prefix_list_id_input: str
```

- *Type:* str

---

##### `egress_only_gateway_id_input`<sup>Optional</sup> <a name="egress_only_gateway_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```python
egress_only_gateway_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `destination_prefix_list_id`<sup>Required</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

---

##### `egress_only_gateway_id`<sup>Required</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultRouteTableRoute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>, cdktf.IResolvable]

---


### DefaultRouteTableTimeoutsOutputReference <a name="DefaultRouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_route_table

defaultRouteTable.DefaultRouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultRouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>, cdktf.IResolvable]

---



