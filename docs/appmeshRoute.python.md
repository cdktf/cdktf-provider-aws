# `appmeshRoute` Submodule <a name="`appmeshRoute` Submodule" id="@cdktf/provider-aws.appmeshRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshRoute <a name="AppmeshRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route aws_appmesh_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRoute(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshRouteSpec,
  virtual_router_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.virtualRouterName">virtual_router_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}

---

##### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.virtualRouterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec"></a>

```python
def put_spec(
  grpc_route: AppmeshRouteSpecGrpcRoute = None,
  http2_route: AppmeshRouteSpecHttp2Route = None,
  http_route: AppmeshRouteSpecHttpRoute = None,
  priority: typing.Union[int, float] = None,
  tcp_route: AppmeshRouteSpecTcpRoute = None
) -> None
```

###### `grpc_route`<sup>Optional</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.grpcRoute"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_route AppmeshRoute#grpc_route}

---

###### `http2_route`<sup>Optional</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.http2Route"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http2_route AppmeshRoute#http2_route}

---

###### `http_route`<sup>Optional</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.httpRoute"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_route AppmeshRoute#http_route}

---

###### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}.

---

###### `tcp_route`<sup>Optional</sup> <a name="tcp_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.putSpec.parameter.tcpRoute"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

tcp_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_route AppmeshRoute#tcp_route}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput">virtual_router_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName">virtual_router_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.spec"></a>

```python
spec: AppmeshRouteSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.specInput"></a>

```python
spec_input: AppmeshRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_router_name_input`<sup>Optional</sup> <a name="virtual_router_name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput"></a>

```python
virtual_router_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.virtualRouterName"></a>

```python
virtual_router_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshRoute.AppmeshRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshRouteConfig <a name="AppmeshRouteConfig" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshRouteSpec,
  virtual_router_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName">virtual_router_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.spec"></a>

```python
spec: AppmeshRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#spec AppmeshRoute#spec}

---

##### `virtual_router_name`<sup>Required</sup> <a name="virtual_router_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName"></a>

```python
virtual_router_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags AppmeshRoute#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

### AppmeshRouteSpec <a name="AppmeshRouteSpec" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpec(
  grpc_route: AppmeshRouteSpecGrpcRoute = None,
  http2_route: AppmeshRouteSpecHttp2Route = None,
  http_route: AppmeshRouteSpecHttpRoute = None,
  priority: typing.Union[int, float] = None,
  tcp_route: AppmeshRouteSpecTcpRoute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute">grpc_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route">http2_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute">http_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | http_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute">tcp_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | tcp_route block. |

---

##### `grpc_route`<sup>Optional</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.grpcRoute"></a>

```python
grpc_route: AppmeshRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_route AppmeshRoute#grpc_route}

---

##### `http2_route`<sup>Optional</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.http2Route"></a>

```python
http2_route: AppmeshRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http2_route AppmeshRoute#http2_route}

---

##### `http_route`<sup>Optional</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.httpRoute"></a>

```python
http_route: AppmeshRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_route AppmeshRoute#http_route}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#priority AppmeshRoute#priority}.

---

##### `tcp_route`<sup>Optional</sup> <a name="tcp_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec.property.tcpRoute"></a>

```python
tcp_route: AppmeshRouteSpecTcpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

tcp_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_route AppmeshRoute#tcp_route}

---

### AppmeshRouteSpecGrpcRoute <a name="AppmeshRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRoute(
  action: AppmeshRouteSpecGrpcRouteAction,
  match: AppmeshRouteSpecGrpcRouteMatch = None,
  retry_policy: AppmeshRouteSpecGrpcRouteRetryPolicy = None,
  timeout: AppmeshRouteSpecGrpcRouteTimeout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action"></a>

```python
action: AppmeshRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match"></a>

```python
match: AppmeshRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecGrpcRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout"></a>

```python
timeout: AppmeshRouteSpecGrpcRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecGrpcRouteAction <a name="AppmeshRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteAction(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget">weighted_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]</code> | weighted_target block. |

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget"></a>

```python
weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecGrpcRouteActionWeightedTarget <a name="AppmeshRouteSpecGrpcRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget(
  virtual_node: str,
  weight: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode">virtual_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecGrpcRouteMatch <a name="AppmeshRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatch(
  metadata: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]] = None,
  method_name: str = None,
  port: typing.Union[int, float] = None,
  prefix: str = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata">metadata</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]</code> | metadata block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName">method_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata"></a>

```python
metadata: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#metadata AppmeshRoute#metadata}

---

##### `method_name`<sup>Optional</sup> <a name="method_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName"></a>

```python
method_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadata <a name="AppmeshRouteSpecGrpcRouteMatchMetadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata(
  name: str,
  invert: typing.Union[bool, IResolvable] = None,
  match: AppmeshRouteSpecGrpcRouteMatchMetadataMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match"></a>

```python
match: AppmeshRouteSpecGrpcRouteMatchMetadataMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatch <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange = None,
  regex: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range"></a>

```python
range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicy <a name="AppmeshRouteSpecGrpcRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout,
  grpc_retry_events: typing.List[str] = None,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents">grpc_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `grpc_retry_events`<sup>Optional</sup> <a name="grpc_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

```python
grpc_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}.

---

##### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeout <a name="AppmeshRouteSpecGrpcRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout(
  idle: AppmeshRouteSpecGrpcRouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecGrpcRouteTimeoutPerRequest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle"></a>

```python
idle: AppmeshRouteSpecGrpcRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecGrpcRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecGrpcRouteTimeoutIdle <a name="AppmeshRouteSpecGrpcRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeoutPerRequest <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2Route <a name="AppmeshRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2Route(
  action: AppmeshRouteSpecHttp2RouteAction,
  match: AppmeshRouteSpecHttp2RouteMatch,
  retry_policy: AppmeshRouteSpecHttp2RouteRetryPolicy = None,
  timeout: AppmeshRouteSpecHttp2RouteTimeout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action"></a>

```python
action: AppmeshRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match"></a>

```python
match: AppmeshRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecHttp2RouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout"></a>

```python
timeout: AppmeshRouteSpecHttp2RouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttp2RouteAction <a name="AppmeshRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteAction(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget">weighted_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]</code> | weighted_target block. |

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget"></a>

```python
weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttp2RouteActionWeightedTarget <a name="AppmeshRouteSpecHttp2RouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget(
  virtual_node: str,
  weight: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode">virtual_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttp2RouteMatch <a name="AppmeshRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatch(
  prefix: str,
  header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]] = None,
  method: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttp2RouteMatchHeader <a name="AppmeshRouteSpecHttp2RouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader(
  name: str,
  invert: typing.Union[bool, IResolvable] = None,
  match: AppmeshRouteSpecHttp2RouteMatchHeaderMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match"></a>

```python
match: AppmeshRouteSpecHttp2RouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatch <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange = None,
  regex: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range"></a>

```python
range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicy <a name="AppmeshRouteSpecHttp2RouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeout <a name="AppmeshRouteSpecHttp2RouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout(
  idle: AppmeshRouteSpecHttp2RouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecHttp2RouteTimeoutPerRequest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle"></a>

```python
idle: AppmeshRouteSpecHttp2RouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecHttp2RouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttp2RouteTimeoutIdle <a name="AppmeshRouteSpecHttp2RouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeoutPerRequest <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRoute <a name="AppmeshRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRoute(
  action: AppmeshRouteSpecHttpRouteAction,
  match: AppmeshRouteSpecHttpRouteMatch,
  retry_policy: AppmeshRouteSpecHttpRouteRetryPolicy = None,
  timeout: AppmeshRouteSpecHttpRouteTimeout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action"></a>

```python
action: AppmeshRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match"></a>

```python
match: AppmeshRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecHttpRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout"></a>

```python
timeout: AppmeshRouteSpecHttpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttpRouteAction <a name="AppmeshRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteAction(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget">weighted_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]</code> | weighted_target block. |

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget"></a>

```python
weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttpRouteActionWeightedTarget <a name="AppmeshRouteSpecHttpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget(
  virtual_node: str,
  weight: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode">virtual_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecHttpRouteMatch <a name="AppmeshRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatch(
  prefix: str,
  header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]] = None,
  method: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method">method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method"></a>

```python
method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttpRouteMatchHeader <a name="AppmeshRouteSpecHttpRouteMatchHeader" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader(
  name: str,
  invert: typing.Union[bool, IResolvable] = None,
  match: AppmeshRouteSpecHttpRouteMatchHeaderMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match"></a>

```python
match: AppmeshRouteSpecHttpRouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatch <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange = None,
  regex: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex">regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range"></a>

```python
range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex"></a>

```python
regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end">end</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start">start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttpRouteRetryPolicy <a name="AppmeshRouteSpecHttpRouteRetryPolicy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeout <a name="AppmeshRouteSpecHttpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeout(
  idle: AppmeshRouteSpecHttpRouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecHttpRouteTimeoutPerRequest = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle"></a>

```python
idle: AppmeshRouteSpecHttpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecHttpRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttpRouteTimeoutIdle <a name="AppmeshRouteSpecHttpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeoutPerRequest <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequest" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecTcpRoute <a name="AppmeshRouteSpecTcpRoute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRoute(
  action: AppmeshRouteSpecTcpRouteAction,
  match: AppmeshRouteSpecTcpRouteMatch = None,
  timeout: AppmeshRouteSpecTcpRouteTimeout = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action"></a>

```python
action: AppmeshRouteSpecTcpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.match"></a>

```python
match: AppmeshRouteSpecTcpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout"></a>

```python
timeout: AppmeshRouteSpecTcpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecTcpRouteAction <a name="AppmeshRouteSpecTcpRouteAction" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteAction(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget">weighted_target</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]</code> | weighted_target block. |

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget"></a>

```python
weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecTcpRouteActionWeightedTarget <a name="AppmeshRouteSpecTcpRouteActionWeightedTarget" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget(
  virtual_node: str,
  weight: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode">virtual_node</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weight AppmeshRoute#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteMatch <a name="AppmeshRouteSpecTcpRouteMatch" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteMatch(
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

### AppmeshRouteSpecTcpRouteTimeout <a name="AppmeshRouteSpecTcpRouteTimeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteTimeout(
  idle: AppmeshRouteSpecTcpRouteTimeoutIdle = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | idle block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle"></a>

```python
idle: AppmeshRouteSpecTcpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

### AppmeshRouteSpecTcpRouteTimeoutIdle <a name="AppmeshRouteSpecTcpRouteTimeoutIdle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshRouteSpecGrpcRouteActionOutputReference <a name="AppmeshRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget">put_weighted_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weighted_target` <a name="put_weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget"></a>

```python
def put_weighted_target(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget">weighted_target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput">weighted_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget"></a>

```python
weighted_target: AppmeshRouteSpecGrpcRouteActionWeightedTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a>

---

##### `weighted_target_input`<sup>Optional</sup> <a name="weighted_target_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput"></a>

```python
weighted_target_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetList <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtual_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode">virtual_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node_input`<sup>Optional</sup> <a name="virtual_node_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```python
virtual_node_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecGrpcRouteActionWeightedTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecGrpcRouteMatchMetadataList <a name="AppmeshRouteSpecGrpcRouteMatchMetadataList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange"></a>

```python
def put_range(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range"></a>

```python
range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a>

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput"></a>

```python
range_input: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert">reset_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch">reset_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch"></a>

```python
def put_match(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange = None,
  regex: str = None,
  suffix: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

##### `reset_invert` <a name="reset_invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert"></a>

```python
def reset_invert() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput">invert_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a>

---

##### `invert_input`<sup>Optional</sup> <a name="invert_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput"></a>

```python
invert_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecGrpcRouteMatchMetadataMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecGrpcRouteMatchMetadata, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName">reset_method_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata"></a>

```python
def put_metadata(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]

---

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_method_name` <a name="reset_method_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName"></a>

```python
def reset_method_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput">method_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName">method_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata"></a>

```python
metadata: AppmeshRouteSpecGrpcRouteMatchMetadataList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]

---

##### `method_name_input`<sup>Optional</sup> <a name="method_name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput"></a>

```python
method_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `method_name`<sup>Required</sup> <a name="method_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName"></a>

```python
method_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---


### AppmeshRouteSpecGrpcRouteOutputReference <a name="AppmeshRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction"></a>

```python
def put_action(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteActionWeightedTarget]]
) -> None
```

###### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction.parameter.weightedTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch"></a>

```python
def put_match(
  metadata: typing.Union[IResolvable, typing.List[AppmeshRouteSpecGrpcRouteMatchMetadata]] = None,
  method_name: str = None,
  port: typing.Union[int, float] = None,
  prefix: str = None,
  service_name: str = None
) -> None
```

###### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.metadata"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>]]

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#metadata AppmeshRoute#metadata}

---

###### `method_name`<sup>Optional</sup> <a name="method_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.methodName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method_name AppmeshRoute#method_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#service_name AppmeshRoute#service_name}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout,
  grpc_retry_events: typing.List[str] = None,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
) -> None
```

###### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

###### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.perRetryTimeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

###### `grpc_retry_events`<sup>Optional</sup> <a name="grpc_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.grpcRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}.

---

###### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.httpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

###### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.tcpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout"></a>

```python
def put_timeout(
  idle: AppmeshRouteSpecGrpcRouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecGrpcRouteTimeoutPerRequest = None
) -> None
```

###### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout.parameter.idle"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

###### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout.parameter.perRequest"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

##### `reset_match` <a name="reset_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action"></a>

```python
action: AppmeshRouteSpecGrpcRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecGrpcRouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout"></a>

```python
timeout: AppmeshRouteSpecGrpcRouteTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: AppmeshRouteSpecGrpcRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput"></a>

```python
timeout_input: AppmeshRouteSpecGrpcRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout">put_per_retry_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents">reset_grpc_retry_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents">reset_http_retry_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents">reset_tcp_retry_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_per_retry_timeout` <a name="put_per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```python
def put_per_retry_timeout(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_grpc_retry_events` <a name="reset_grpc_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents"></a>

```python
def reset_grpc_retry_events() -> None
```

##### `reset_http_retry_events` <a name="reset_http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```python
def reset_http_retry_events() -> None
```

##### `reset_tcp_retry_events` <a name="reset_tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```python
def reset_tcp_retry_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput">grpc_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput">http_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">per_retry_timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcp_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents">grpc_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `grpc_retry_events_input`<sup>Optional</sup> <a name="grpc_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput"></a>

```python
grpc_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_retry_events_input`<sup>Optional</sup> <a name="http_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```python
http_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_retry_timeout_input`<sup>Optional</sup> <a name="per_retry_timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```python
per_retry_timeout_input: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcp_retry_events_input`<sup>Optional</sup> <a name="tcp_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```python
tcp_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `grpc_retry_events`<sup>Required</sup> <a name="grpc_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents"></a>

```python
grpc_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_retry_events`<sup>Required</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_retry_events`<sup>Required</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle">put_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest">put_per_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle">reset_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest">reset_per_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idle` <a name="put_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle"></a>

```python
def put_idle(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `put_per_request` <a name="put_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest"></a>

```python
def put_per_request(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_idle` <a name="reset_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle"></a>

```python
def reset_idle() -> None
```

##### `reset_per_request` <a name="reset_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest"></a>

```python
def reset_per_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput">idle_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput">per_request_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle"></a>

```python
idle: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a>

---

##### `per_request`<sup>Required</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a>

---

##### `idle_input`<sup>Optional</sup> <a name="idle_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput"></a>

```python
idle_input: AppmeshRouteSpecGrpcRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `per_request_input`<sup>Optional</sup> <a name="per_request_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput"></a>

```python
per_request_input: AppmeshRouteSpecGrpcRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttp2RouteActionOutputReference <a name="AppmeshRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget">put_weighted_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weighted_target` <a name="put_weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget"></a>

```python
def put_weighted_target(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget">weighted_target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput">weighted_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget"></a>

```python
weighted_target: AppmeshRouteSpecHttp2RouteActionWeightedTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a>

---

##### `weighted_target_input`<sup>Optional</sup> <a name="weighted_target_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput"></a>

```python
weighted_target_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetList <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtual_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode">virtual_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node_input`<sup>Optional</sup> <a name="virtual_node_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```python
virtual_node_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecHttp2RouteActionWeightedTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecHttp2RouteMatchHeaderList <a name="AppmeshRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange"></a>

```python
def put_range(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```python
range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```python
range_input: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert">reset_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch">reset_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch"></a>

```python
def put_match(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange = None,
  regex: str = None,
  suffix: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

##### `reset_invert` <a name="reset_invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert"></a>

```python
def reset_invert() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput">invert_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a>

---

##### `invert_input`<sup>Optional</sup> <a name="invert_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput"></a>

```python
invert_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecHttp2RouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecHttp2RouteMatchHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]

---

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```python
header: AppmeshRouteSpecHttp2RouteMatchHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---


### AppmeshRouteSpecHttp2RouteOutputReference <a name="AppmeshRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction"></a>

```python
def put_action(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteActionWeightedTarget]]
) -> None
```

###### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction.parameter.weightedTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch"></a>

```python
def put_match(
  prefix: str,
  header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttp2RouteMatchHeader]] = None,
  method: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
) -> None
```

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

###### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.scheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
) -> None
```

###### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

###### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.perRetryTimeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

###### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.httpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

###### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.tcpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout"></a>

```python
def put_timeout(
  idle: AppmeshRouteSpecHttp2RouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecHttp2RouteTimeoutPerRequest = None
) -> None
```

###### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout.parameter.idle"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

###### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout.parameter.perRequest"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action"></a>

```python
action: AppmeshRouteSpecHttp2RouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecHttp2RouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout"></a>

```python
timeout: AppmeshRouteSpecHttp2RouteTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: AppmeshRouteSpecHttp2RouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput"></a>

```python
timeout_input: AppmeshRouteSpecHttp2RouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout">put_per_retry_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents">reset_http_retry_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents">reset_tcp_retry_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_per_retry_timeout` <a name="put_per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```python
def put_per_retry_timeout(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_http_retry_events` <a name="reset_http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```python
def reset_http_retry_events() -> None
```

##### `reset_tcp_retry_events` <a name="reset_tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```python
def reset_tcp_retry_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput">http_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput">per_retry_timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcp_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `http_retry_events_input`<sup>Optional</sup> <a name="http_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```python
http_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_retry_timeout_input`<sup>Optional</sup> <a name="per_retry_timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```python
per_retry_timeout_input: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `tcp_retry_events_input`<sup>Optional</sup> <a name="tcp_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```python
tcp_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_retry_events`<sup>Required</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_retry_events`<sup>Required</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle">put_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest">put_per_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle">reset_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest">reset_per_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idle` <a name="put_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle"></a>

```python
def put_idle(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `put_per_request` <a name="put_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest"></a>

```python
def put_per_request(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_idle` <a name="reset_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle"></a>

```python
def reset_idle() -> None
```

##### `reset_per_request` <a name="reset_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest"></a>

```python
def reset_per_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput">idle_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput">per_request_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle"></a>

```python
idle: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a>

---

##### `per_request`<sup>Required</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a>

---

##### `idle_input`<sup>Optional</sup> <a name="idle_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput"></a>

```python
idle_input: AppmeshRouteSpecHttp2RouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `per_request_input`<sup>Optional</sup> <a name="per_request_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput"></a>

```python
per_request_input: AppmeshRouteSpecHttp2RouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttpRouteActionOutputReference <a name="AppmeshRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget">put_weighted_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weighted_target` <a name="put_weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget"></a>

```python
def put_weighted_target(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget">weighted_target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput">weighted_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget"></a>

```python
weighted_target: AppmeshRouteSpecHttpRouteActionWeightedTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a>

---

##### `weighted_target_input`<sup>Optional</sup> <a name="weighted_target_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput"></a>

```python
weighted_target_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetList <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtual_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode">virtual_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node_input`<sup>Optional</sup> <a name="virtual_node_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```python
virtual_node_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecHttpRouteActionWeightedTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecHttpRouteMatchHeaderList <a name="AppmeshRouteSpecHttpRouteMatchHeaderList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecHttpRouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange">put_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange">reset_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_range` <a name="put_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange"></a>

```python
def put_range(
  end: typing.Union[int, float],
  start: typing.Union[int, float]
) -> None
```

###### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.end"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#end AppmeshRoute#end}.

---

###### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.start"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#start AppmeshRoute#start}.

---

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```

##### `reset_range` <a name="reset_range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange"></a>

```python
def reset_range() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput">range_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput">regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```python
range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `range_input`<sup>Optional</sup> <a name="range_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```python
range_input: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```python
regex_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput">end_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput">start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```python
end_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```python
start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```python
end: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```python
start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert">reset_invert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch">reset_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch"></a>

```python
def put_match(
  exact: str = None,
  prefix: str = None,
  range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange = None,
  regex: str = None,
  suffix: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#exact AppmeshRoute#exact}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.range"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#range AppmeshRoute#range}

---

###### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.regex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#regex AppmeshRoute#regex}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#suffix AppmeshRoute#suffix}.

---

##### `reset_invert` <a name="reset_invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert"></a>

```python
def reset_invert() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput">invert_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a>

---

##### `invert_input`<sup>Optional</sup> <a name="invert_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput"></a>

```python
invert_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecHttpRouteMatchHeaderMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```python
invert: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecHttpRouteMatchHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecHttpRouteMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme">reset_scheme</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]

---

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_method` <a name="reset_method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_scheme` <a name="reset_scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme"></a>

```python
def reset_scheme() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```python
header: AppmeshRouteSpecHttpRouteMatchHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a>

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---


### AppmeshRouteSpecHttpRouteOutputReference <a name="AppmeshRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy">put_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy">reset_retry_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction"></a>

```python
def put_action(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteActionWeightedTarget]]
) -> None
```

###### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction.parameter.weightedTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch"></a>

```python
def put_match(
  prefix: str,
  header: typing.Union[IResolvable, typing.List[AppmeshRouteSpecHttpRouteMatchHeader]] = None,
  method: str = None,
  port: typing.Union[int, float] = None,
  scheme: str = None
) -> None
```

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#prefix AppmeshRoute#prefix}.

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#header AppmeshRoute#header}

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.method"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#method AppmeshRoute#method}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

###### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.scheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#scheme AppmeshRoute#scheme}.

---

##### `put_retry_policy` <a name="put_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy"></a>

```python
def put_retry_policy(
  max_retries: typing.Union[int, float],
  per_retry_timeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout,
  http_retry_events: typing.List[str] = None,
  tcp_retry_events: typing.List[str] = None
) -> None
```

###### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

###### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.perRetryTimeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

###### `http_retry_events`<sup>Optional</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.httpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

###### `tcp_retry_events`<sup>Optional</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.tcpRetryEvents"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout"></a>

```python
def put_timeout(
  idle: AppmeshRouteSpecHttpRouteTimeoutIdle = None,
  per_request: AppmeshRouteSpecHttpRouteTimeoutPerRequest = None
) -> None
```

###### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout.parameter.idle"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

###### `per_request`<sup>Optional</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout.parameter.perRequest"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#per_request AppmeshRoute#per_request}

---

##### `reset_retry_policy` <a name="reset_retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy"></a>

```python
def reset_retry_policy() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy">retry_policy</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput">retry_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action"></a>

```python
action: AppmeshRouteSpecHttpRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecHttpRouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a>

---

##### `retry_policy`<sup>Required</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy"></a>

```python
retry_policy: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout"></a>

```python
timeout: AppmeshRouteSpecHttpRouteTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `retry_policy_input`<sup>Optional</sup> <a name="retry_policy_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput"></a>

```python
retry_policy_input: AppmeshRouteSpecHttpRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput"></a>

```python
timeout_input: AppmeshRouteSpecHttpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout">put_per_retry_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents">reset_http_retry_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents">reset_tcp_retry_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_per_retry_timeout` <a name="put_per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```python
def put_per_retry_timeout(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_http_retry_events` <a name="reset_http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```python
def reset_http_retry_events() -> None
```

##### `reset_tcp_retry_events` <a name="reset_tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```python
def reset_tcp_retry_events() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout">per_retry_timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput">http_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">per_retry_timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcp_retry_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents">http_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcp_retry_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `per_retry_timeout`<sup>Required</sup> <a name="per_retry_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```python
per_retry_timeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `http_retry_events_input`<sup>Optional</sup> <a name="http_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```python
http_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_retry_timeout_input`<sup>Optional</sup> <a name="per_retry_timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```python
per_retry_timeout_input: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcp_retry_events_input`<sup>Optional</sup> <a name="tcp_retry_events_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```python
tcp_retry_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_retry_events`<sup>Required</sup> <a name="http_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```python
http_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_retry_events`<sup>Required</sup> <a name="tcp_retry_events" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```python
tcp_retry_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttpRouteTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle">put_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest">put_per_request</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle">reset_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest">reset_per_request</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idle` <a name="put_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle"></a>

```python
def put_idle(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `put_per_request` <a name="put_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest"></a>

```python
def put_per_request(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_idle` <a name="reset_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle"></a>

```python
def reset_idle() -> None
```

##### `reset_per_request` <a name="reset_per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest"></a>

```python
def reset_per_request() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest">per_request</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput">idle_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput">per_request_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle"></a>

```python
idle: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a>

---

##### `per_request`<sup>Required</sup> <a name="per_request" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest"></a>

```python
per_request: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a>

---

##### `idle_input`<sup>Optional</sup> <a name="idle_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput"></a>

```python
idle_input: AppmeshRouteSpecHttpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `per_request_input`<sup>Optional</sup> <a name="per_request_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput"></a>

```python
per_request_input: AppmeshRouteSpecHttpRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecHttpRouteTimeoutPerRequest
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecOutputReference <a name="AppmeshRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute">put_grpc_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route">put_http2_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute">put_http_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute">put_tcp_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute">reset_grpc_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route">reset_http2_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute">reset_http_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute">reset_tcp_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc_route` <a name="put_grpc_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute"></a>

```python
def put_grpc_route(
  action: AppmeshRouteSpecGrpcRouteAction,
  match: AppmeshRouteSpecGrpcRouteMatch = None,
  retry_policy: AppmeshRouteSpecGrpcRouteRetryPolicy = None,
  timeout: AppmeshRouteSpecGrpcRouteTimeout = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

###### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

##### `put_http2_route` <a name="put_http2_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route"></a>

```python
def put_http2_route(
  action: AppmeshRouteSpecHttp2RouteAction,
  match: AppmeshRouteSpecHttp2RouteMatch,
  retry_policy: AppmeshRouteSpecHttp2RouteRetryPolicy = None,
  timeout: AppmeshRouteSpecHttp2RouteTimeout = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

##### `put_http_route` <a name="put_http_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute"></a>

```python
def put_http_route(
  action: AppmeshRouteSpecHttpRouteAction,
  match: AppmeshRouteSpecHttpRouteMatch,
  retry_policy: AppmeshRouteSpecHttpRouteRetryPolicy = None,
  timeout: AppmeshRouteSpecHttpRouteTimeout = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

###### `retry_policy`<sup>Optional</sup> <a name="retry_policy" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.retryPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

##### `put_tcp_route` <a name="put_tcp_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute"></a>

```python
def put_tcp_route(
  action: AppmeshRouteSpecTcpRouteAction,
  match: AppmeshRouteSpecTcpRouteMatch = None,
  timeout: AppmeshRouteSpecTcpRouteTimeout = None
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#action AppmeshRoute#action}

---

###### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#match AppmeshRoute#match}

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.timeout"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#timeout AppmeshRoute#timeout}

---

##### `reset_grpc_route` <a name="reset_grpc_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute"></a>

```python
def reset_grpc_route() -> None
```

##### `reset_http2_route` <a name="reset_http2_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route"></a>

```python
def reset_http2_route() -> None
```

##### `reset_http_route` <a name="reset_http_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute"></a>

```python
def reset_http_route() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_tcp_route` <a name="reset_tcp_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute"></a>

```python
def reset_tcp_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute">grpc_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route">http2_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute">http_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute">tcp_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput">grpc_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput">http2_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput">http_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput">tcp_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_route`<sup>Required</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute"></a>

```python
grpc_route: AppmeshRouteSpecGrpcRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a>

---

##### `http2_route`<sup>Required</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route"></a>

```python
http2_route: AppmeshRouteSpecHttp2RouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a>

---

##### `http_route`<sup>Required</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute"></a>

```python
http_route: AppmeshRouteSpecHttpRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a>

---

##### `tcp_route`<sup>Required</sup> <a name="tcp_route" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute"></a>

```python
tcp_route: AppmeshRouteSpecTcpRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a>

---

##### `grpc_route_input`<sup>Optional</sup> <a name="grpc_route_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput"></a>

```python
grpc_route_input: AppmeshRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `http2_route_input`<sup>Optional</sup> <a name="http2_route_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput"></a>

```python
http2_route_input: AppmeshRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `http_route_input`<sup>Optional</sup> <a name="http_route_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput"></a>

```python
http_route_input: AppmeshRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tcp_route_input`<sup>Optional</sup> <a name="tcp_route_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput"></a>

```python
tcp_route_input: AppmeshRouteSpecTcpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---


### AppmeshRouteSpecTcpRouteActionOutputReference <a name="AppmeshRouteSpecTcpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget">put_weighted_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weighted_target` <a name="put_weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget"></a>

```python
def put_weighted_target(
  value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget">weighted_target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput">weighted_target_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget"></a>

```python
weighted_target: AppmeshRouteSpecTcpRouteActionWeightedTargetList
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a>

---

##### `weighted_target_input`<sup>Optional</sup> <a name="weighted_target_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput"></a>

```python
weighted_target_input: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecTcpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetList <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetList" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtual_node_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode">virtual_node</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node_input`<sup>Optional</sup> <a name="virtual_node_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```python
virtual_node_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_node`<sup>Required</sup> <a name="virtual_node" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```python
virtual_node: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AppmeshRouteSpecTcpRouteActionWeightedTarget, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>, cdktf.IResolvable]

---


### AppmeshRouteSpecTcpRouteMatchOutputReference <a name="AppmeshRouteSpecTcpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecTcpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---


### AppmeshRouteSpecTcpRouteOutputReference <a name="AppmeshRouteSpecTcpRouteOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout">put_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction"></a>

```python
def put_action(
  weighted_target: typing.Union[IResolvable, typing.List[AppmeshRouteSpecTcpRouteActionWeightedTarget]]
) -> None
```

###### `weighted_target`<sup>Required</sup> <a name="weighted_target" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction.parameter.weightedTarget"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>]]

weighted_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch"></a>

```python
def put_match(
  port: typing.Union[int, float] = None
) -> None
```

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#port AppmeshRoute#port}.

---

##### `put_timeout` <a name="put_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout"></a>

```python
def put_timeout(
  idle: AppmeshRouteSpecTcpRouteTimeoutIdle = None
) -> None
```

###### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout.parameter.idle"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#idle AppmeshRoute#idle}

---

##### `reset_match` <a name="reset_match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput">timeout_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action"></a>

```python
action: AppmeshRouteSpecTcpRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.match"></a>

```python
match: AppmeshRouteSpecTcpRouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatchOutputReference">AppmeshRouteSpecTcpRouteMatchOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout"></a>

```python
timeout: AppmeshRouteSpecTcpRouteTimeoutOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshRouteSpecTcpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshRouteSpecTcpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteMatch">AppmeshRouteSpecTcpRouteMatch</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput"></a>

```python
timeout_input: AppmeshRouteSpecTcpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecTcpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---


### AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecTcpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecTcpRouteTimeoutOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutOutputReference" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_route

appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle">put_idle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle">reset_idle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_idle` <a name="put_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle"></a>

```python
def put_idle(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#unit AppmeshRoute#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route#value AppmeshRoute#value}.

---

##### `reset_idle` <a name="reset_idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle"></a>

```python
def reset_idle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput">idle_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle"></a>

```python
idle: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a>

---

##### `idle_input`<sup>Optional</sup> <a name="idle_input" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput"></a>

```python
idle_input: AppmeshRouteSpecTcpRouteTimeoutIdle
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshRouteSpecTcpRouteTimeout
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---



