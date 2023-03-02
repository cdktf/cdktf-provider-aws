# `vpcIpamResourceDiscoveryAssociation` Submodule <a name="`vpcIpamResourceDiscoveryAssociation` Submodule" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamResourceDiscoveryAssociation <a name="VpcIpamResourceDiscoveryAssociation" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association aws_vpc_ipam_resource_discovery_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_id: str,
  ipam_resource_discovery_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcIpamResourceDiscoveryAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.ipamId">ipam_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.ipamResourceDiscoveryId">ipam_resource_discovery_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.ipamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}.

---

##### `ipam_resource_discovery_id`<sup>Required</sup> <a name="ipam_resource_discovery_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.ipamResourceDiscoveryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#timeouts VpcIpamResourceDiscoveryAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn">ipam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion">ipam_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput">ipam_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput">ipam_resource_discovery_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId">ipam_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId">ipam_resource_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ipam_arn`<sup>Required</sup> <a name="ipam_arn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamArn"></a>

```python
ipam_arn: str
```

- *Type:* str

---

##### `ipam_region`<sup>Required</sup> <a name="ipam_region" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamRegion"></a>

```python
ipam_region: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeouts"></a>

```python
timeouts: VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference">VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipam_id_input`<sup>Optional</sup> <a name="ipam_id_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamIdInput"></a>

```python
ipam_id_input: str
```

- *Type:* str

---

##### `ipam_resource_discovery_id_input`<sup>Optional</sup> <a name="ipam_resource_discovery_id_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryIdInput"></a>

```python
ipam_resource_discovery_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpcIpamResourceDiscoveryAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamId"></a>

```python
ipam_id: str
```

- *Type:* str

---

##### `ipam_resource_discovery_id`<sup>Required</sup> <a name="ipam_resource_discovery_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.ipamResourceDiscoveryId"></a>

```python
ipam_resource_discovery_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamResourceDiscoveryAssociationConfig <a name="VpcIpamResourceDiscoveryAssociationConfig" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ipam_id: str,
  ipam_resource_discovery_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: VpcIpamResourceDiscoveryAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId">ipam_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId">ipam_resource_discovery_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamId"></a>

```python
ipam_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_id VpcIpamResourceDiscoveryAssociation#ipam_id}.

---

##### `ipam_resource_discovery_id`<sup>Required</sup> <a name="ipam_resource_discovery_id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.ipamResourceDiscoveryId"></a>

```python
ipam_resource_discovery_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#ipam_resource_discovery_id VpcIpamResourceDiscoveryAssociation#ipam_resource_discovery_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#id VpcIpamResourceDiscoveryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags VpcIpamResourceDiscoveryAssociation#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#tags_all VpcIpamResourceDiscoveryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationConfig.property.timeouts"></a>

```python
timeouts: VpcIpamResourceDiscoveryAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#timeouts VpcIpamResourceDiscoveryAssociation#timeouts}

---

### VpcIpamResourceDiscoveryAssociationTimeouts <a name="VpcIpamResourceDiscoveryAssociationTimeouts" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#create VpcIpamResourceDiscoveryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#delete VpcIpamResourceDiscoveryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_resource_discovery_association#update VpcIpamResourceDiscoveryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference <a name="VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpc_ipam_resource_discovery_association

vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpcIpamResourceDiscoveryAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.vpcIpamResourceDiscoveryAssociation.VpcIpamResourceDiscoveryAssociationTimeouts">VpcIpamResourceDiscoveryAssociationTimeouts</a>, cdktf.IResolvable]

---



