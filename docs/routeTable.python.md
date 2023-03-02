# `routeTable` Submodule <a name="`routeTable` Submodule" id="@cdktf/provider-aws.routeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RouteTable <a name="RouteTable" id="@cdktf/provider-aws.routeTable.RouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route_table aws_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  id: str = None,
  propagating_vgws: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[RouteTableRoute]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagating_vgws`<sup>Optional</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.propagatingVgws"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.route"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#timeouts RouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws">reset_propagating_vgws</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.routeTable.RouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.routeTable.RouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.routeTable.RouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.routeTable.RouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.routeTable.RouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_route` <a name="put_route" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute"></a>

```python
def put_route(
  value: typing.Union[IResolvable, typing.List[RouteTableRoute]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.routeTable.RouteTable.putRoute.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.routeTable.RouteTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_propagating_vgws` <a name="reset_propagating_vgws" id="@cdktf/provider-aws.routeTable.RouteTable.resetPropagatingVgws"></a>

```python
def reset_propagating_vgws() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-aws.routeTable.RouteTable.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.routeTable.RouteTable.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.routeTable.RouteTable.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.routeTable.RouteTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput">propagating_vgws_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.routeInput">route_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.routeTable.RouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.routeTable.RouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.routeTable.RouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.routeTable.RouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTable.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.routeTable.RouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.routeTable.RouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.routeTable.RouteTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.routeTable.RouteTable.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTable.property.route"></a>

```python
route: RouteTableRouteList
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList">RouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeouts"></a>

```python
timeouts: RouteTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference">RouteTableTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `propagating_vgws_input`<sup>Optional</sup> <a name="propagating_vgws_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgwsInput"></a>

```python
propagating_vgws_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.routeInput"></a>

```python
route_input: typing.Union[IResolvable, typing.List[RouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[RouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `propagating_vgws`<sup>Required</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.routeTable.RouteTable.property.propagatingVgws"></a>

```python
propagating_vgws: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTable.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.routeTable.RouteTable.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.routeTable.RouteTable.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.routeTable.RouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RouteTableConfig <a name="RouteTableConfig" id="@cdktf/provider-aws.routeTable.RouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  id: str = None,
  propagating_vgws: typing.List[str] = None,
  route: typing.Union[IResolvable, typing.List[RouteTableRoute]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: RouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws">propagating_vgws</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.route">route</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_id RouteTable#vpc_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#id RouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagating_vgws`<sup>Optional</sup> <a name="propagating_vgws" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.propagatingVgws"></a>

```python
propagating_vgws: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#propagating_vgws RouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.route"></a>

```python
route: typing.Union[IResolvable, typing.List[RouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#route RouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags RouteTable#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#tags_all RouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.routeTable.RouteTableConfig.property.timeouts"></a>

```python
timeouts: RouteTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#timeouts RouteTable#timeouts}

---

### RouteTableRoute <a name="RouteTableRoute" id="@cdktf/provider-aws.routeTable.RouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableRoute(
  carrier_gateway_id: str = None,
  cidr_block: str = None,
  core_network_arn: str = None,
  destination_prefix_list_id: str = None,
  egress_only_gateway_id: str = None,
  gateway_id: str = None,
  instance_id: str = None,
  ipv6_cidr_block: str = None,
  local_gateway_id: str = None,
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
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}. |

---

##### `carrier_gateway_id`<sup>Optional</sup> <a name="carrier_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#carrier_gateway_id RouteTable#carrier_gateway_id}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#cidr_block RouteTable#cidr_block}.

---

##### `core_network_arn`<sup>Optional</sup> <a name="core_network_arn" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#core_network_arn RouteTable#core_network_arn}.

---

##### `destination_prefix_list_id`<sup>Optional</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#destination_prefix_list_id RouteTable#destination_prefix_list_id}.

---

##### `egress_only_gateway_id`<sup>Optional</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#egress_only_gateway_id RouteTable#egress_only_gateway_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#gateway_id RouteTable#gateway_id}.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#instance_id RouteTable#instance_id}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#ipv6_cidr_block RouteTable#ipv6_cidr_block}.

---

##### `local_gateway_id`<sup>Optional</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#local_gateway_id RouteTable#local_gateway_id}.

---

##### `nat_gateway_id`<sup>Optional</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#nat_gateway_id RouteTable#nat_gateway_id}.

---

##### `network_interface_id`<sup>Optional</sup> <a name="network_interface_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#network_interface_id RouteTable#network_interface_id}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#transit_gateway_id RouteTable#transit_gateway_id}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_endpoint_id RouteTable#vpc_endpoint_id}.

---

##### `vpc_peering_connection_id`<sup>Optional</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.routeTable.RouteTableRoute.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#vpc_peering_connection_id RouteTable#vpc_peering_connection_id}.

---

### RouteTableTimeouts <a name="RouteTableTimeouts" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#create RouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#delete RouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route_table#update RouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RouteTableRouteList <a name="RouteTableRouteList" id="@cdktf/provider-aws.routeTable.RouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableRouteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.routeTable.RouteTableRouteList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RouteTableRoute]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>]]

---


### RouteTableRouteOutputReference <a name="RouteTableRouteOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId">reset_carrier_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn">reset_core_network_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId">reset_destination_prefix_list_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId">reset_egress_only_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId">reset_local_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId">reset_nat_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId">reset_network_interface_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId">reset_vpc_peering_connection_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_carrier_gateway_id` <a name="reset_carrier_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCarrierGatewayId"></a>

```python
def reset_carrier_gateway_id() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_core_network_arn` <a name="reset_core_network_arn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetCoreNetworkArn"></a>

```python
def reset_core_network_arn() -> None
```

##### `reset_destination_prefix_list_id` <a name="reset_destination_prefix_list_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```python
def reset_destination_prefix_list_id() -> None
```

##### `reset_egress_only_gateway_id` <a name="reset_egress_only_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```python
def reset_egress_only_gateway_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_local_gateway_id` <a name="reset_local_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetLocalGatewayId"></a>

```python
def reset_local_gateway_id() -> None
```

##### `reset_nat_gateway_id` <a name="reset_nat_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNatGatewayId"></a>

```python
def reset_nat_gateway_id() -> None
```

##### `reset_network_interface_id` <a name="reset_network_interface_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```python
def reset_network_interface_id() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

##### `reset_vpc_peering_connection_id` <a name="reset_vpc_peering_connection_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```python
def reset_vpc_peering_connection_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput">carrier_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput">core_network_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput">destination_prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egress_only_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput">local_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpc_peering_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId">carrier_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId">destination_prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId">egress_only_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpc_peering_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `carrier_gateway_id_input`<sup>Optional</sup> <a name="carrier_gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayIdInput"></a>

```python
carrier_gateway_id_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `core_network_arn_input`<sup>Optional</sup> <a name="core_network_arn_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArnInput"></a>

```python
core_network_arn_input: str
```

- *Type:* str

---

##### `destination_prefix_list_id_input`<sup>Optional</sup> <a name="destination_prefix_list_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```python
destination_prefix_list_id_input: str
```

- *Type:* str

---

##### `egress_only_gateway_id_input`<sup>Optional</sup> <a name="egress_only_gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```python
egress_only_gateway_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `local_gateway_id_input`<sup>Optional</sup> <a name="local_gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayIdInput"></a>

```python
local_gateway_id_input: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_peering_connection_id_input`<sup>Optional</sup> <a name="vpc_peering_connection_id_input" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```python
vpc_peering_connection_id_input: str
```

- *Type:* str

---

##### `carrier_gateway_id`<sup>Required</sup> <a name="carrier_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.carrierGatewayId"></a>

```python
carrier_gateway_id: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `destination_prefix_list_id`<sup>Required</sup> <a name="destination_prefix_list_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```python
destination_prefix_list_id: str
```

- *Type:* str

---

##### `egress_only_gateway_id`<sup>Required</sup> <a name="egress_only_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```python
egress_only_gateway_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_peering_connection_id`<sup>Required</sup> <a name="vpc_peering_connection_id" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```python
vpc_peering_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.routeTable.RouteTableRouteOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RouteTableRoute, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableRoute">RouteTableRoute</a>, cdktf.IResolvable]

---


### RouteTableTimeoutsOutputReference <a name="RouteTableTimeoutsOutputReference" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route_table

routeTable.RouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.routeTable.RouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[RouteTableTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.routeTable.RouteTableTimeouts">RouteTableTimeouts</a>, cdktf.IResolvable]

---



