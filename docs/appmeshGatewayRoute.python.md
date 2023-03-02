# `appmeshGatewayRoute` Submodule <a name="`appmeshGatewayRoute` Submodule" id="@cdktf/provider-aws.appmeshGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshGatewayRoute <a name="AppmeshGatewayRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route aws_appmesh_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRoute(
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
  spec: AppmeshGatewayRouteSpec,
  virtual_gateway_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.virtualGatewayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.meshOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner">reset_mesh_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec"></a>

```python
def put_spec(
  grpc_route: AppmeshGatewayRouteSpecGrpcRoute = None,
  http2_route: AppmeshGatewayRouteSpecHttp2Route = None,
  http_route: AppmeshGatewayRouteSpecHttpRoute = None
) -> None
```

###### `grpc_route`<sup>Optional</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.grpcRoute"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}

---

###### `http2_route`<sup>Optional</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.http2Route"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}

---

###### `http_route`<sup>Optional</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.httpRoute"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mesh_owner` <a name="reset_mesh_owner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner"></a>

```python
def reset_mesh_owner() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRoute.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRoute.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRoute.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner">resource_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput">mesh_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput">mesh_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput">virtual_gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName">mesh_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner">mesh_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `resource_owner`<sup>Required</sup> <a name="resource_owner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner"></a>

```python
resource_owner: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec"></a>

```python
spec: AppmeshGatewayRouteSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_name_input`<sup>Optional</sup> <a name="mesh_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput"></a>

```python
mesh_name_input: str
```

- *Type:* str

---

##### `mesh_owner_input`<sup>Optional</sup> <a name="mesh_owner_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput"></a>

```python
mesh_owner_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput"></a>

```python
spec_input: AppmeshGatewayRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_gateway_name_input`<sup>Optional</sup> <a name="virtual_gateway_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput"></a>

```python
virtual_gateway_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

---

##### `mesh_owner`<sup>Required</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName"></a>

```python
virtual_gateway_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshGatewayRouteConfig <a name="AppmeshGatewayRouteConfig" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mesh_name: str,
  name: str,
  spec: AppmeshGatewayRouteSpec,
  virtual_gateway_name: str,
  id: str = None,
  mesh_owner: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName">mesh_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName">virtual_gateway_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner">mesh_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mesh_name`<sup>Required</sup> <a name="mesh_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName"></a>

```python
mesh_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec"></a>

```python
spec: AppmeshGatewayRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `virtual_gateway_name`<sup>Required</sup> <a name="virtual_gateway_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName"></a>

```python
virtual_gateway_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mesh_owner`<sup>Optional</sup> <a name="mesh_owner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner"></a>

```python
mesh_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

### AppmeshGatewayRouteSpec <a name="AppmeshGatewayRouteSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpec(
  grpc_route: AppmeshGatewayRouteSpecGrpcRoute = None,
  http2_route: AppmeshGatewayRouteSpecHttp2Route = None,
  http_route: AppmeshGatewayRouteSpecHttpRoute = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute">grpc_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route">http2_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute">http_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | http_route block. |

---

##### `grpc_route`<sup>Optional</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute"></a>

```python
grpc_route: AppmeshGatewayRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}

---

##### `http2_route`<sup>Optional</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route"></a>

```python
http2_route: AppmeshGatewayRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}

---

##### `http_route`<sup>Optional</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute"></a>

```python
http_route: AppmeshGatewayRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}

---

### AppmeshGatewayRouteSpecGrpcRoute <a name="AppmeshGatewayRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute(
  action: AppmeshGatewayRouteSpecGrpcRouteAction,
  match: AppmeshGatewayRouteSpecGrpcRouteMatch
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action"></a>

```python
action: AppmeshGatewayRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match"></a>

```python
match: AppmeshGatewayRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecGrpcRouteAction <a name="AppmeshGatewayRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction(
  target: AppmeshGatewayRouteSpecGrpcRouteActionTarget
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | target block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target"></a>

```python
target: AppmeshGatewayRouteSpecGrpcRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTarget <a name="AppmeshGatewayRouteSpecGrpcRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget(
  virtual_service: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService(
  virtual_service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecGrpcRouteMatch <a name="AppmeshGatewayRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch(
  service_name: str,
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttp2Route <a name="AppmeshGatewayRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route(
  action: AppmeshGatewayRouteSpecHttp2RouteAction,
  match: AppmeshGatewayRouteSpecHttp2RouteMatch
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action"></a>

```python
action: AppmeshGatewayRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match"></a>

```python
match: AppmeshGatewayRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteAction <a name="AppmeshGatewayRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction(
  target: AppmeshGatewayRouteSpecHttp2RouteActionTarget,
  rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewrite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target"></a>

```python
target: AppmeshGatewayRouteSpecHttp2RouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite"></a>

```python
rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewrite <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite(
  hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname = None,
  prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix"></a>

```python
prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname(
  default_target_hostname: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix(
  default_prefix: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `default_prefix`<sup>Optional</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionTarget <a name="AppmeshGatewayRouteSpecHttp2RouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget(
  virtual_service: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService(
  virtual_service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch(
  hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostname = None,
  port: typing.Union[int, float] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHostname <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname(
  exact: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttpRoute <a name="AppmeshGatewayRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute(
  action: AppmeshGatewayRouteSpecHttpRouteAction,
  match: AppmeshGatewayRouteSpecHttpRouteMatch
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | match block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action"></a>

```python
action: AppmeshGatewayRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match"></a>

```python
match: AppmeshGatewayRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteAction <a name="AppmeshGatewayRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction(
  target: AppmeshGatewayRouteSpecHttpRouteActionTarget,
  rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewrite = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | rewrite block. |

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target"></a>

```python
target: AppmeshGatewayRouteSpecHttpRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite"></a>

```python
rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewrite <a name="AppmeshGatewayRouteSpecHttpRouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite(
  hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname = None,
  prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | prefix block. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix"></a>

```python
prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname(
  default_target_hostname: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix(
  default_prefix: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `default_prefix`<sup>Optional</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttpRouteActionTarget <a name="AppmeshGatewayRouteSpecHttpRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget(
  virtual_service: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | virtual_service block. |

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService(
  virtual_service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttpRouteMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch(
  hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostname = None,
  port: typing.Union[int, float] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchHostname <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname(
  exact: str = None,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact">exact</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact"></a>

```python
exact: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshGatewayRouteSpecGrpcRouteActionOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget">put_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget"></a>

```python
def put_target(
  virtual_service: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
) -> None
```

###### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget.parameter.virtualService"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target"></a>

```python
target: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput"></a>

```python
target_input: AppmeshGatewayRouteSpecGrpcRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService">put_virtual_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_service` <a name="put_virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService"></a>

```python
def put_virtual_service(
  virtual_service_name: str
) -> None
```

###### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService.parameter.virtualServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput">virtual_service_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtual_service_input`<sup>Optional</sup> <a name="virtual_service_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```python
virtual_service_input: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecGrpcRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtual_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name_input`<sup>Optional</sup> <a name="virtual_service_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```python
virtual_service_name_input: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


### AppmeshGatewayRouteSpecGrpcRouteOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction"></a>

```python
def put_action(
  target: AppmeshGatewayRouteSpecGrpcRouteActionTarget
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch"></a>

```python
def put_match(
  service_name: str,
  port: typing.Union[int, float] = None
) -> None
```

###### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action"></a>

```python
action: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match"></a>

```python
match: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshGatewayRouteSpecGrpcRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshGatewayRouteSpecGrpcRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite">put_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite">reset_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rewrite` <a name="put_rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite"></a>

```python
def put_rewrite(
  hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname = None,
  prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix = None
) -> None
```

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite.parameter.hostname"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite.parameter.prefix"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget"></a>

```python
def put_target(
  virtual_service: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
) -> None
```

###### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget.parameter.virtualService"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

##### `reset_rewrite` <a name="reset_rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite"></a>

```python
def reset_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput">rewrite_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite"></a>

```python
rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target"></a>

```python
target: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a>

---

##### `rewrite_input`<sup>Optional</sup> <a name="rewrite_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput"></a>

```python
rewrite_input: AppmeshGatewayRouteSpecHttp2RouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput"></a>

```python
target_input: AppmeshGatewayRouteSpecHttp2RouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">default_target_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_target_hostname_input`<sup>Optional</sup> <a name="default_target_hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```python
default_target_hostname_input: str
```

- *Type:* str

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname">put_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix">put_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hostname` <a name="put_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname"></a>

```python
def put_hostname(
  default_target_hostname: str
) -> None
```

###### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname.parameter.defaultTargetHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

##### `put_prefix` <a name="put_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix"></a>

```python
def put_prefix(
  default_prefix: str = None,
  value: str = None
) -> None
```

###### `default_prefix`<sup>Optional</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix.parameter.defaultPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput">hostname_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput">prefix_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix"></a>

```python
prefix: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput"></a>

```python
hostname_input: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput"></a>

```python
prefix_input: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix">reset_default_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_prefix` <a name="reset_default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```python
def reset_default_prefix() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput">default_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prefix_input`<sup>Optional</sup> <a name="default_prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```python
default_prefix_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default_prefix`<sup>Required</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService">put_virtual_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_service` <a name="put_virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService"></a>

```python
def put_virtual_service(
  virtual_service_name: str
) -> None
```

###### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService.parameter.virtualServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput">virtual_service_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtual_service_input`<sup>Optional</sup> <a name="virtual_service_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput"></a>

```python
virtual_service_input: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtual_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name_input`<sup>Optional</sup> <a name="virtual_service_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```python
virtual_service_name_input: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname">put_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hostname` <a name="put_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname"></a>

```python
def put_hostname(
  exact: str = None,
  suffix: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput">hostname_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput"></a>

```python
hostname_input: AppmeshGatewayRouteSpecHttp2RouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction"></a>

```python
def put_action(
  target: AppmeshGatewayRouteSpecHttp2RouteActionTarget,
  rewrite: AppmeshGatewayRouteSpecHttp2RouteActionRewrite = None
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

###### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction.parameter.rewrite"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch"></a>

```python
def put_match(
  hostname: AppmeshGatewayRouteSpecHttp2RouteMatchHostname = None,
  port: typing.Union[int, float] = None,
  prefix: str = None
) -> None
```

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.hostname"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action"></a>

```python
action: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match"></a>

```python
match: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshGatewayRouteSpecHttp2RouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshGatewayRouteSpecHttp2RouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite">put_rewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite">reset_rewrite</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rewrite` <a name="put_rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite"></a>

```python
def put_rewrite(
  hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname = None,
  prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix = None
) -> None
```

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite.parameter.hostname"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite.parameter.prefix"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget"></a>

```python
def put_target(
  virtual_service: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
) -> None
```

###### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget.parameter.virtualService"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

##### `reset_rewrite` <a name="reset_rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite"></a>

```python
def reset_rewrite() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite">rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput">rewrite_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrite`<sup>Required</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite"></a>

```python
rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target"></a>

```python
target: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a>

---

##### `rewrite_input`<sup>Optional</sup> <a name="rewrite_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput"></a>

```python
rewrite_input: AppmeshGatewayRouteSpecHttpRouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput"></a>

```python
target_input: AppmeshGatewayRouteSpecHttpRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">default_target_hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">default_target_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_target_hostname_input`<sup>Optional</sup> <a name="default_target_hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```python
default_target_hostname_input: str
```

- *Type:* str

---

##### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```python
default_target_hostname: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname">put_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix">put_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hostname` <a name="put_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname"></a>

```python
def put_hostname(
  default_target_hostname: str
) -> None
```

###### `default_target_hostname`<sup>Required</sup> <a name="default_target_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname.parameter.defaultTargetHostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

##### `put_prefix` <a name="put_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix"></a>

```python
def put_prefix(
  default_prefix: str = None,
  value: str = None
) -> None
```

###### `default_prefix`<sup>Optional</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix.parameter.defaultPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix">prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput">hostname_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput">prefix_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix"></a>

```python
prefix: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput"></a>

```python
hostname_input: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput"></a>

```python
prefix_input: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteActionRewrite
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix">reset_default_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_prefix` <a name="reset_default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```python
def reset_default_prefix() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput">default_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix">default_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prefix_input`<sup>Optional</sup> <a name="default_prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```python
default_prefix_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default_prefix`<sup>Required</sup> <a name="default_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```python
default_prefix: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService">put_virtual_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_virtual_service` <a name="put_virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService"></a>

```python
def put_virtual_service(
  virtual_service_name: str
) -> None
```

###### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService.parameter.virtualServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService">virtual_service</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput">virtual_service_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service`<sup>Required</sup> <a name="virtual_service" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService"></a>

```python
virtual_service: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a>

---

##### `virtual_service_input`<sup>Optional</sup> <a name="virtual_service_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```python
virtual_service_input: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteActionTarget
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">virtual_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">virtual_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `virtual_service_name_input`<sup>Optional</sup> <a name="virtual_service_name_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```python
virtual_service_name_input: str
```

- *Type:* str

---

##### `virtual_service_name`<sup>Required</sup> <a name="virtual_service_name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```python
virtual_service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact">reset_exact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exact` <a name="reset_exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact"></a>

```python
def reset_exact() -> None
```

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput">exact_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact">exact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_input`<sup>Optional</sup> <a name="exact_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput"></a>

```python
exact_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact"></a>

```python
exact: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname">put_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hostname` <a name="put_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname"></a>

```python
def put_hostname(
  exact: str = None,
  suffix: str = None
) -> None
```

###### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname.parameter.exact"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname">hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput">hostname_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname"></a>

```python
hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a>

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput"></a>

```python
hostname_input: AppmeshGatewayRouteSpecHttpRouteMatchHostname
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch">put_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction"></a>

```python
def put_action(
  target: AppmeshGatewayRouteSpecHttpRouteActionTarget,
  rewrite: AppmeshGatewayRouteSpecHttpRouteActionRewrite = None
) -> None
```

###### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

###### `rewrite`<sup>Optional</sup> <a name="rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction.parameter.rewrite"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

##### `put_match` <a name="put_match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch"></a>

```python
def put_match(
  hostname: AppmeshGatewayRouteSpecHttpRouteMatchHostname = None,
  port: typing.Union[int, float] = None,
  prefix: str = None
) -> None
```

###### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.hostname"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action"></a>

```python
action: AppmeshGatewayRouteSpecHttpRouteActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match"></a>

```python
match: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```python
action_input: AppmeshGatewayRouteSpecHttpRouteAction
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```python
match_input: AppmeshGatewayRouteSpecHttpRouteMatch
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---


### AppmeshGatewayRouteSpecOutputReference <a name="AppmeshGatewayRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appmesh_gateway_route

appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute">put_grpc_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route">put_http2_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute">put_http_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute">reset_grpc_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route">reset_http2_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute">reset_http_route</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_grpc_route` <a name="put_grpc_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute"></a>

```python
def put_grpc_route(
  action: AppmeshGatewayRouteSpecGrpcRouteAction,
  match: AppmeshGatewayRouteSpecGrpcRouteMatch
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

##### `put_http2_route` <a name="put_http2_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route"></a>

```python
def put_http2_route(
  action: AppmeshGatewayRouteSpecHttp2RouteAction,
  match: AppmeshGatewayRouteSpecHttp2RouteMatch
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

##### `put_http_route` <a name="put_http_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute"></a>

```python
def put_http_route(
  action: AppmeshGatewayRouteSpecHttpRouteAction,
  match: AppmeshGatewayRouteSpecHttpRouteMatch
) -> None
```

###### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute.parameter.action"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

###### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute.parameter.match"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

##### `reset_grpc_route` <a name="reset_grpc_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute"></a>

```python
def reset_grpc_route() -> None
```

##### `reset_http2_route` <a name="reset_http2_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route"></a>

```python
def reset_http2_route() -> None
```

##### `reset_http_route` <a name="reset_http_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute"></a>

```python
def reset_http_route() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute">grpc_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route">http2_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute">http_route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput">grpc_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput">http2_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput">http_route_input</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_route`<sup>Required</sup> <a name="grpc_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute"></a>

```python
grpc_route: AppmeshGatewayRouteSpecGrpcRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a>

---

##### `http2_route`<sup>Required</sup> <a name="http2_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route"></a>

```python
http2_route: AppmeshGatewayRouteSpecHttp2RouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a>

---

##### `http_route`<sup>Required</sup> <a name="http_route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute"></a>

```python
http_route: AppmeshGatewayRouteSpecHttpRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a>

---

##### `grpc_route_input`<sup>Optional</sup> <a name="grpc_route_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput"></a>

```python
grpc_route_input: AppmeshGatewayRouteSpecGrpcRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `http2_route_input`<sup>Optional</sup> <a name="http2_route_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput"></a>

```python
http2_route_input: AppmeshGatewayRouteSpecHttp2Route
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `http_route_input`<sup>Optional</sup> <a name="http_route_input" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput"></a>

```python
http_route_input: AppmeshGatewayRouteSpecHttpRoute
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue"></a>

```python
internal_value: AppmeshGatewayRouteSpec
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---



