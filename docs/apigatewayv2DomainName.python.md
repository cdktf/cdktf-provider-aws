# `apigatewayv2DomainName` Submodule <a name="`apigatewayv2DomainName` Submodule" id="@cdktf/provider-aws.apigatewayv2DomainName"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2DomainName <a name="Apigatewayv2DomainName" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name aws_apigatewayv2_domain_name}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  domain_name_configuration: Apigatewayv2DomainNameDomainNameConfiguration,
  id: str = None,
  mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Apigatewayv2DomainNameTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfiguration">domain_name_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | domain_name_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}.

---

##### `domain_name_configuration`<sup>Required</sup> <a name="domain_name_configuration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.domainNameConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

domain_name_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.mutualTlsAuthentication"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration">put_domain_name_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication">put_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication">reset_mutual_tls_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_domain_name_configuration` <a name="put_domain_name_configuration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration"></a>

```python
def put_domain_name_configuration(
  certificate_arn: str,
  endpoint_type: str,
  security_policy: str,
  ownership_verification_certificate_arn: str = None
) -> None
```

###### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.certificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}.

---

###### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.endpointType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}.

---

###### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.securityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}.

---

###### `ownership_verification_certificate_arn`<sup>Optional</sup> <a name="ownership_verification_certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putDomainNameConfiguration.parameter.ownershipVerificationCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}.

---

##### `put_mutual_tls_authentication` <a name="put_mutual_tls_authentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication"></a>

```python
def put_mutual_tls_authentication(
  truststore_uri: str,
  truststore_version: str = None
) -> None
```

###### `truststore_uri`<sup>Required</sup> <a name="truststore_uri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.truststoreUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}.

---

###### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putMutualTlsAuthentication.parameter.truststoreVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mutual_tls_authentication` <a name="reset_mutual_tls_authentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetMutualTlsAuthentication"></a>

```python
def reset_mutual_tls_authentication() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainName.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression">api_mapping_selection_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration">domain_name_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput">domain_name_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput">mutual_tls_authentication_input</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_mapping_selection_expression`<sup>Required</sup> <a name="api_mapping_selection_expression" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.apiMappingSelectionExpression"></a>

```python
api_mapping_selection_expression: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `domain_name_configuration`<sup>Required</sup> <a name="domain_name_configuration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfiguration"></a>

```python
domain_name_configuration: Apigatewayv2DomainNameDomainNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference">Apigatewayv2DomainNameDomainNameConfigurationOutputReference</a>

---

##### `mutual_tls_authentication`<sup>Required</sup> <a name="mutual_tls_authentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference">Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeouts"></a>

```python
timeouts: Apigatewayv2DomainNameTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference">Apigatewayv2DomainNameTimeoutsOutputReference</a>

---

##### `domain_name_configuration_input`<sup>Optional</sup> <a name="domain_name_configuration_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameConfigurationInput"></a>

```python
domain_name_configuration_input: Apigatewayv2DomainNameDomainNameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mutual_tls_authentication_input`<sup>Optional</sup> <a name="mutual_tls_authentication_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.mutualTlsAuthenticationInput"></a>

```python
mutual_tls_authentication_input: Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[Apigatewayv2DomainNameTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>, cdktf.IResolvable]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainName.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2DomainNameConfig <a name="Apigatewayv2DomainNameConfig" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  domain_name_configuration: Apigatewayv2DomainNameDomainNameConfiguration,
  id: str = None,
  mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: Apigatewayv2DomainNameTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration">domain_name_configuration</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | domain_name_configuration block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication">mutual_tls_authentication</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | mutual_tls_authentication block. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name Apigatewayv2DomainName#domain_name}.

---

##### `domain_name_configuration`<sup>Required</sup> <a name="domain_name_configuration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.domainNameConfiguration"></a>

```python
domain_name_configuration: Apigatewayv2DomainNameDomainNameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

domain_name_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#id Apigatewayv2DomainName#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mutual_tls_authentication`<sup>Optional</sup> <a name="mutual_tls_authentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.mutualTlsAuthentication"></a>

```python
mutual_tls_authentication: Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

mutual_tls_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags Apigatewayv2DomainName#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#tags_all Apigatewayv2DomainName#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameConfig.property.timeouts"></a>

```python
timeouts: Apigatewayv2DomainNameTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#timeouts Apigatewayv2DomainName#timeouts}

---

### Apigatewayv2DomainNameDomainNameConfiguration <a name="Apigatewayv2DomainNameDomainNameConfiguration" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration(
  certificate_arn: str,
  endpoint_type: str,
  security_policy: str,
  ownership_verification_certificate_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn">certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy">security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}. |

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#certificate_arn Apigatewayv2DomainName#certificate_arn}.

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#endpoint_type Apigatewayv2DomainName#endpoint_type}.

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#security_policy Apigatewayv2DomainName#security_policy}.

---

##### `ownership_verification_certificate_arn`<sup>Optional</sup> <a name="ownership_verification_certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#ownership_verification_certificate_arn Apigatewayv2DomainName#ownership_verification_certificate_arn}.

---

### Apigatewayv2DomainNameMutualTlsAuthentication <a name="Apigatewayv2DomainNameMutualTlsAuthentication" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication(
  truststore_uri: str,
  truststore_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}. |

---

##### `truststore_uri`<sup>Required</sup> <a name="truststore_uri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_uri Apigatewayv2DomainName#truststore_uri}.

---

##### `truststore_version`<sup>Optional</sup> <a name="truststore_version" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#truststore_version Apigatewayv2DomainName#truststore_version}.

---

### Apigatewayv2DomainNameTimeouts <a name="Apigatewayv2DomainNameTimeouts" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#create Apigatewayv2DomainName#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name#update Apigatewayv2DomainName#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2DomainNameDomainNameConfigurationOutputReference <a name="Apigatewayv2DomainNameDomainNameConfigurationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn">reset_ownership_verification_certificate_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ownership_verification_certificate_arn` <a name="reset_ownership_verification_certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.resetOwnershipVerificationCertificateArn"></a>

```python
def reset_ownership_verification_certificate_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName">target_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput">ownership_verification_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput">security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn">ownership_verification_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy">security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `target_domain_name`<sup>Required</sup> <a name="target_domain_name" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.targetDomainName"></a>

```python
target_domain_name: str
```

- *Type:* str

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `ownership_verification_certificate_arn_input`<sup>Optional</sup> <a name="ownership_verification_certificate_arn_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArnInput"></a>

```python
ownership_verification_certificate_arn_input: str
```

- *Type:* str

---

##### `security_policy_input`<sup>Optional</sup> <a name="security_policy_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicyInput"></a>

```python
security_policy_input: str
```

- *Type:* str

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `ownership_verification_certificate_arn`<sup>Required</sup> <a name="ownership_verification_certificate_arn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.ownershipVerificationCertificateArn"></a>

```python
ownership_verification_certificate_arn: str
```

- *Type:* str

---

##### `security_policy`<sup>Required</sup> <a name="security_policy" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.securityPolicy"></a>

```python
security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2DomainNameDomainNameConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameDomainNameConfiguration">Apigatewayv2DomainNameDomainNameConfiguration</a>

---


### Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference <a name="Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion">reset_truststore_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_truststore_version` <a name="reset_truststore_version" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.resetTruststoreVersion"></a>

```python
def reset_truststore_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput">truststore_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput">truststore_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri">truststore_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion">truststore_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `truststore_uri_input`<sup>Optional</sup> <a name="truststore_uri_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUriInput"></a>

```python
truststore_uri_input: str
```

- *Type:* str

---

##### `truststore_version_input`<sup>Optional</sup> <a name="truststore_version_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersionInput"></a>

```python
truststore_version_input: str
```

- *Type:* str

---

##### `truststore_uri`<sup>Required</sup> <a name="truststore_uri" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreUri"></a>

```python
truststore_uri: str
```

- *Type:* str

---

##### `truststore_version`<sup>Required</sup> <a name="truststore_version" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.truststoreVersion"></a>

```python
truststore_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: Apigatewayv2DomainNameMutualTlsAuthentication
```

- *Type:* <a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameMutualTlsAuthentication">Apigatewayv2DomainNameMutualTlsAuthentication</a>

---


### Apigatewayv2DomainNameTimeoutsOutputReference <a name="Apigatewayv2DomainNameTimeoutsOutputReference" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import apigatewayv2_domain_name

apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[Apigatewayv2DomainNameTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.apigatewayv2DomainName.Apigatewayv2DomainNameTimeouts">Apigatewayv2DomainNameTimeouts</a>, cdktf.IResolvable]

---



