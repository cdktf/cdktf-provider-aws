# `dataAwsRoute53ResolverFirewallDomainList` Submodule <a name="`dataAwsRoute53ResolverFirewallDomainList` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverFirewallDomainList <a name="DataAwsRoute53ResolverFirewallDomainList" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_domain_list_id: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.firewallDomainListId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#region DataAwsRoute53ResolverFirewallDomainList#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallDomainList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallDomainList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRoute53ResolverFirewallDomainList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRoute53ResolverFirewallDomainList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverFirewallDomainList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creatorRequestId">creator_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.domainCount">domain_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.managedOwnerName">managed_owner_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.modificationTime">modification_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListIdInput">firewall_domain_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator_request_id`<sup>Required</sup> <a name="creator_request_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.creatorRequestId"></a>

```python
creator_request_id: str
```

- *Type:* str

---

##### `domain_count`<sup>Required</sup> <a name="domain_count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.domainCount"></a>

```python
domain_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `managed_owner_name`<sup>Required</sup> <a name="managed_owner_name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.managedOwnerName"></a>

```python
managed_owner_name: str
```

- *Type:* str

---

##### `modification_time`<sup>Required</sup> <a name="modification_time" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.modificationTime"></a>

```python
modification_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `firewall_domain_list_id_input`<sup>Optional</sup> <a name="firewall_domain_list_id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListIdInput"></a>

```python
firewall_domain_list_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverFirewallDomainListConfig <a name="DataAwsRoute53ResolverFirewallDomainListConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_route53_resolver_firewall_domain_list

dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  firewall_domain_list_id: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.firewallDomainListId">firewall_domain_list_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `firewall_domain_list_id`<sup>Required</sup> <a name="firewall_domain_list_id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.firewallDomainListId"></a>

```python
firewall_domain_list_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRoute53ResolverFirewallDomainList.DataAwsRoute53ResolverFirewallDomainListConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/data-sources/route53_resolver_firewall_domain_list#region DataAwsRoute53ResolverFirewallDomainList#region}

---



