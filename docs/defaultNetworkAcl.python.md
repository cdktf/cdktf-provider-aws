# `defaultNetworkAcl` Submodule <a name="`defaultNetworkAcl` Submodule" id="@cdktf/provider-aws.defaultNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNetworkAcl <a name="DefaultNetworkAcl" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl aws_default_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_network_acl_id: str,
  egress: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.defaultNetworkAclId">default_network_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]</code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]</code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_network_acl_id`<sup>Required</sup> <a name="default_network_acl_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.defaultNetworkAclId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.egress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.ingress"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress">put_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress">reset_egress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_egress` <a name="put_egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress"></a>

```python
def put_egress(
  value: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putEgress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress"></a>

```python
def put_ingress(
  value: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.putIngress.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]

---

##### `reset_egress` <a name="reset_egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetEgress"></a>

```python
def reset_egress() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput">default_network_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput">egress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput">ingress_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId">default_network_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egress"></a>

```python
egress: DefaultNetworkAclEgressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList">DefaultNetworkAclEgressList</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingress"></a>

```python
ingress: DefaultNetworkAclIngressList
```

- *Type:* <a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList">DefaultNetworkAclIngressList</a>

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `default_network_acl_id_input`<sup>Optional</sup> <a name="default_network_acl_id_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclIdInput"></a>

```python
default_network_acl_id_input: str
```

- *Type:* str

---

##### `egress_input`<sup>Optional</sup> <a name="egress_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.egressInput"></a>

```python
egress_input: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.ingressInput"></a>

```python
ingress_input: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_network_acl_id`<sup>Required</sup> <a name="default_network_acl_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.defaultNetworkAclId"></a>

```python
default_network_acl_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNetworkAclConfig <a name="DefaultNetworkAclConfig" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_network_acl_id: str,
  egress: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]] = None,
  id: str = None,
  ingress: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]] = None,
  subnet_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId">default_network_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress">egress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]</code> | egress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress">ingress</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]</code> | ingress block. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_network_acl_id`<sup>Required</sup> <a name="default_network_acl_id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.defaultNetworkAclId"></a>

```python
default_network_acl_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.egress"></a>

```python
egress: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]

egress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#egress DefaultNetworkAcl#egress}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#id DefaultNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.ingress"></a>

```python
ingress: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]

ingress block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ingress DefaultNetworkAcl#ingress}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags DefaultNetworkAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#tags_all DefaultNetworkAcl#tags_all}.

---

### DefaultNetworkAclEgress <a name="DefaultNetworkAclEgress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclEgress(
  action: str,
  from_port: typing.Union[int, float],
  protocol: str,
  rule_no: typing.Union[int, float],
  to_port: typing.Union[int, float],
  cidr_block: str = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

### DefaultNetworkAclIngress <a name="DefaultNetworkAclIngress" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclIngress(
  action: str,
  from_port: typing.Union[int, float],
  protocol: str,
  rule_no: typing.Union[int, float],
  to_port: typing.Union[int, float],
  cidr_block: str = None,
  icmp_code: typing.Union[int, float] = None,
  icmp_type: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#action DefaultNetworkAcl#action}.

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#from_port DefaultNetworkAcl#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#protocol DefaultNetworkAcl#protocol}.

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#rule_no DefaultNetworkAcl#rule_no}.

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#to_port DefaultNetworkAcl#to_port}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}.

---

##### `icmp_code`<sup>Optional</sup> <a name="icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}.

---

##### `icmp_type`<sup>Optional</sup> <a name="icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}.

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNetworkAclEgressList <a name="DefaultNetworkAclEgressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclEgressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultNetworkAclEgressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultNetworkAclEgress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>]]

---


### DefaultNetworkAclEgressOutputReference <a name="DefaultNetworkAclEgressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclEgressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput">rule_no_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_no_input`<sup>Optional</sup> <a name="rule_no_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNoInput"></a>

```python
rule_no_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultNetworkAclEgress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclEgress">DefaultNetworkAclEgress</a>, cdktf.IResolvable]

---


### DefaultNetworkAclIngressList <a name="DefaultNetworkAclIngressList" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclIngressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DefaultNetworkAclIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DefaultNetworkAclIngress]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>]]

---


### DefaultNetworkAclIngressOutputReference <a name="DefaultNetworkAclIngressOutputReference" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import default_network_acl

defaultNetworkAcl.DefaultNetworkAclIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode">reset_icmp_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType">reset_icmp_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_icmp_code` <a name="reset_icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpCode"></a>

```python
def reset_icmp_code() -> None
```

##### `reset_icmp_type` <a name="reset_icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIcmpType"></a>

```python
def reset_icmp_type() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput">icmp_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput">icmp_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput">rule_no_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode">icmp_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType">icmp_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo">rule_no</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code_input`<sup>Optional</sup> <a name="icmp_code_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCodeInput"></a>

```python
icmp_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type_input`<sup>Optional</sup> <a name="icmp_type_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpTypeInput"></a>

```python
icmp_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_no_input`<sup>Optional</sup> <a name="rule_no_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNoInput"></a>

```python
rule_no_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_code`<sup>Required</sup> <a name="icmp_code" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpCode"></a>

```python
icmp_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `icmp_type`<sup>Required</sup> <a name="icmp_type" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.icmpType"></a>

```python
icmp_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_no`<sup>Required</sup> <a name="rule_no" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.ruleNo"></a>

```python
rule_no: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngressOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DefaultNetworkAclIngress, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.defaultNetworkAcl.DefaultNetworkAclIngress">DefaultNetworkAclIngress</a>, cdktf.IResolvable]

---



