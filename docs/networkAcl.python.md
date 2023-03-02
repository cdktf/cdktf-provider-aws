# `networkAcl` Submodule <a name="`networkAcl` Submodule" id="@cdktf/provider-aws.networkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkAcl <a name="NetworkAcl" id="@cdktf/provider-aws.networkAcl.NetworkAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/network_acl aws_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAcl(
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
  egress: typing.Union[IResolvable, typing.List[NetworkAclEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[NetworkAclIngress]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#vpc_id NetworkAcl#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#egress NetworkAcl#egress}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#id NetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ingress NetworkAcl#ingress}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#subnet_ids NetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags NetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags_all NetworkAcl#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#vpc_id NetworkAcl#vpc_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.egress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#egress NetworkAcl#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#id NetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.ingress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ingress NetworkAcl#ingress}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#subnet_ids NetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags NetworkAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkAcl.NetworkAcl.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags_all NetworkAcl#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAcl.NetworkAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkAcl.NetworkAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkAcl.NetworkAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkAcl.NetworkAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkAcl.NetworkAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkAcl.NetworkAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.putEgress"></a>

```python
def put_egress(
  value: typing.Union[IResolvable, typing.List[NetworkAclEgress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkAcl.NetworkAcl.putEgress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.putIngress"></a>

```python
def put_ingress(
  value: typing.Union[IResolvable, typing.List[NetworkAclIngress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkAcl.NetworkAcl.putIngress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]

---

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkAcl.NetworkAcl.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkAcl.NetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList">NetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList">NetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.egressInput">egress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.ingressInput">ingress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.egress"></a>

```python
egress: NetworkAclEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList">NetworkAclEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.ingress"></a>

```python
ingress: NetworkAclIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList">NetworkAclIngressList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.egressInput"></a>

```python
egress_input: typing.Union[IResolvable, typing.List[NetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.ingressInput"></a>

```python
ingress_input: typing.Union[IResolvable, typing.List[NetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkAcl.NetworkAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkAclConfig <a name="NetworkAclConfig" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vpc_id: str,
  egress: typing.Union[IResolvable, typing.List[NetworkAclEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[NetworkAclIngress]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#vpc_id NetworkAcl#vpc_id}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#egress NetworkAcl#egress}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#id NetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ingress NetworkAcl#ingress}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#subnet_ids NetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags NetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags_all NetworkAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#vpc_id NetworkAcl#vpc_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.egress"></a>

```python
egress: typing.Union[IResolvable, typing.List[NetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#egress NetworkAcl#egress}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#id NetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.ingress"></a>

```python
ingress: typing.Union[IResolvable, typing.List[NetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ingress NetworkAcl#ingress}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#subnet_ids NetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags NetworkAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkAcl.NetworkAclConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#tags_all NetworkAcl#tags_all}.

---

### NetworkAclEgress <a name="NetworkAclEgress" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclEgress(
  action: str = None,
  cidr_block: str = None,
  from_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  protocol: str = None,
  rule_no: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}.

---

##### `rule_no`<sup>Optional</sup> <a name="rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}.

---

### NetworkAclIngress <a name="NetworkAclIngress" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclIngress(
  action: str = None,
  cidr_block: str = None,
  from_port: typing.Union[int, float] = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  protocol: str = None,
  rule_no: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#action NetworkAcl#action}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#cidr_block NetworkAcl#cidr_block}.

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#from_port NetworkAcl#from_port}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_code NetworkAcl#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#icmp_type NetworkAcl#icmp_type}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#ipv6_cidr_block NetworkAcl#ipv6_cidr_block}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#protocol NetworkAcl#protocol}.

---

##### `rule_no`<sup>Optional</sup> <a name="rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#rule_no NetworkAcl#rule_no}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/network_acl#to_port NetworkAcl#to_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkAclEgressList <a name="NetworkAclEgressList" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclEgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkAclEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>]]

---


### NetworkAclEgressOutputReference <a name="NetworkAclEgressOutputReference" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetRuleNo">reset_rule_no</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rule_no` <a name="reset_rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetRuleNo"></a>

```python
def reset_rule_no() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ruleNoInput">rule_no_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_no_input`<sup>Optional</sup> <a name="rule_no_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ruleNoInput"></a>

```python
rule_no_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkAcl.NetworkAclEgressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkAclEgress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclEgress">NetworkAclEgress</a>, cdktf.IResolvable]

---


### NetworkAclIngressList <a name="NetworkAclIngressList" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkAclIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>]]

---


### NetworkAclIngressOutputReference <a name="NetworkAclIngressOutputReference" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import network_acl

networkAcl.NetworkAclIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetRuleNo">reset_rule_no</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rule_no` <a name="reset_rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetRuleNo"></a>

```python
def reset_rule_no() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ruleNoInput">rule_no_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_no_input`<sup>Optional</sup> <a name="rule_no_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ruleNoInput"></a>

```python
rule_no_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkAcl.NetworkAclIngressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkAclIngress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkAcl.NetworkAclIngress">NetworkAclIngress</a>, cdktf.IResolvable]

---



