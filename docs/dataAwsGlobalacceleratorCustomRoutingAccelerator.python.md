# `dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule <a name="`dataAwsGlobalacceleratorCustomRoutingAccelerator` Submodule" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlobalacceleratorCustomRoutingAccelerator <a name="DataAwsGlobalacceleratorCustomRoutingAccelerator" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsGlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsGlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsGlobalacceleratorCustomRoutingAccelerator to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsGlobalacceleratorCustomRoutingAccelerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsGlobalacceleratorCustomRoutingAccelerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets">ip_sets</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.attributes"></a>

```python
attributes: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `ip_sets`<sup>Required</sup> <a name="ip_sets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.ipSets"></a>

```python
ip_sets: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList</a>

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAccelerator.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes()
```


### DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str = None,
  id: str = None,
  name: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.36.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}.

---

### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled">flow_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket">flow_logs_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix">flow_logs_s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_logs_enabled`<sup>Required</sup> <a name="flow_logs_enabled" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsEnabled"></a>

```python
flow_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `flow_logs_s3_bucket`<sup>Required</sup> <a name="flow_logs_s3_bucket" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Bucket"></a>

```python
flow_logs_s3_bucket: str
```

- *Type:* str

---

##### `flow_logs_s3_prefix`<sup>Required</sup> <a name="flow_logs_s3_prefix" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.flowLogsS3Prefix"></a>

```python
flow_logs_s3_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes">DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes</a>

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference <a name="DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_globalaccelerator_custom_routing_accelerator

dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily">ip_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_family`<sup>Required</sup> <a name="ip_family" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.ipFamily"></a>

```python
ip_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsGlobalacceleratorCustomRoutingAccelerator.DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets">DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets</a>

---



