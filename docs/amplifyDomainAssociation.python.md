# `amplifyDomainAssociation` Submodule <a name="`amplifyDomainAssociation` Submodule" id="@cdktf/provider-aws.amplifyDomainAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyDomainAssociation <a name="AmplifyDomainAssociation" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association aws_amplify_domain_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  domain_name: str,
  sub_domain: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]],
  certificate_settings: AmplifyDomainAssociationCertificateSettings = None,
  enable_auto_sub_domain: typing.Union[bool, IResolvable] = None,
  id: str = None,
  wait_for_verification: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.subDomain">sub_domain</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]</code> | sub_domain block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | certificate_settings block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}.

---

##### `sub_domain`<sup>Required</sup> <a name="sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.subDomain"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]

sub_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}

---

##### `certificate_settings`<sup>Optional</sup> <a name="certificate_settings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.certificateSettings"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#certificate_settings AmplifyDomainAssociation#certificate_settings}

---

##### `enable_auto_sub_domain`<sup>Optional</sup> <a name="enable_auto_sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.enableAutoSubDomain"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `wait_for_verification`<sup>Optional</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.Initializer.parameter.waitForVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings">put_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain">put_sub_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetCertificateSettings">reset_certificate_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetEnableAutoSubDomain">reset_enable_auto_sub_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification">reset_wait_for_verification</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_settings` <a name="put_certificate_settings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings"></a>

```python
def put_certificate_settings(
  type: str,
  custom_certificate_arn: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}.

---

###### `custom_certificate_arn`<sup>Optional</sup> <a name="custom_certificate_arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putCertificateSettings.parameter.customCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}.

---

##### `put_sub_domain` <a name="put_sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain"></a>

```python
def put_sub_domain(
  value: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.putSubDomain.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]

---

##### `reset_certificate_settings` <a name="reset_certificate_settings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetCertificateSettings"></a>

```python
def reset_certificate_settings() -> None
```

##### `reset_enable_auto_sub_domain` <a name="reset_enable_auto_sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetEnableAutoSubDomain"></a>

```python
def reset_enable_auto_sub_domain() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_wait_for_verification` <a name="reset_wait_for_verification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.resetWaitForVerification"></a>

```python
def reset_wait_for_verification() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AmplifyDomainAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AmplifyDomainAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AmplifyDomainAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference">AmplifyDomainAssociationCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord">certificate_verification_dns_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain">sub_domain</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettingsInput">certificate_settings_input</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomainInput">enable_auto_sub_domain_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput">sub_domain_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput">wait_for_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `certificate_settings`<sup>Required</sup> <a name="certificate_settings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettings"></a>

```python
certificate_settings: AmplifyDomainAssociationCertificateSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference">AmplifyDomainAssociationCertificateSettingsOutputReference</a>

---

##### `certificate_verification_dns_record`<sup>Required</sup> <a name="certificate_verification_dns_record" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateVerificationDnsRecord"></a>

```python
certificate_verification_dns_record: str
```

- *Type:* str

---

##### `sub_domain`<sup>Required</sup> <a name="sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomain"></a>

```python
sub_domain: AmplifyDomainAssociationSubDomainList
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList">AmplifyDomainAssociationSubDomainList</a>

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `certificate_settings_input`<sup>Optional</sup> <a name="certificate_settings_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.certificateSettingsInput"></a>

```python
certificate_settings_input: AmplifyDomainAssociationCertificateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `enable_auto_sub_domain_input`<sup>Optional</sup> <a name="enable_auto_sub_domain_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomainInput"></a>

```python
enable_auto_sub_domain_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sub_domain_input`<sup>Optional</sup> <a name="sub_domain_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.subDomainInput"></a>

```python
sub_domain_input: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]

---

##### `wait_for_verification_input`<sup>Optional</sup> <a name="wait_for_verification_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerificationInput"></a>

```python
wait_for_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enable_auto_sub_domain`<sup>Required</sup> <a name="enable_auto_sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.enableAutoSubDomain"></a>

```python
enable_auto_sub_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `wait_for_verification`<sup>Required</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.waitForVerification"></a>

```python
wait_for_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyDomainAssociationCertificateSettings <a name="AmplifyDomainAssociationCertificateSettings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings(
  type: str,
  custom_certificate_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.customCertificateArn">custom_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}.

---

##### `custom_certificate_arn`<sup>Optional</sup> <a name="custom_certificate_arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings.property.customCertificateArn"></a>

```python
custom_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}.

---

### AmplifyDomainAssociationConfig <a name="AmplifyDomainAssociationConfig" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_id: str,
  domain_name: str,
  sub_domain: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]],
  certificate_settings: AmplifyDomainAssociationCertificateSettings = None,
  enable_auto_sub_domain: typing.Union[bool, IResolvable] = None,
  id: str = None,
  wait_for_verification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain">sub_domain</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]</code> | sub_domain block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.certificateSettings">certificate_settings</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | certificate_settings block. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.enableAutoSubDomain">enable_auto_sub_domain</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification">wait_for_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}.

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}.

---

##### `sub_domain`<sup>Required</sup> <a name="sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.subDomain"></a>

```python
sub_domain: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]

sub_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}

---

##### `certificate_settings`<sup>Optional</sup> <a name="certificate_settings" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.certificateSettings"></a>

```python
certificate_settings: AmplifyDomainAssociationCertificateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#certificate_settings AmplifyDomainAssociation#certificate_settings}

---

##### `enable_auto_sub_domain`<sup>Optional</sup> <a name="enable_auto_sub_domain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.enableAutoSubDomain"></a>

```python
enable_auto_sub_domain: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `wait_for_verification`<sup>Optional</sup> <a name="wait_for_verification" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationConfig.property.waitForVerification"></a>

```python
wait_for_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}.

---

### AmplifyDomainAssociationSubDomain <a name="AmplifyDomainAssociationSubDomain" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationSubDomain(
  branch_name: str,
  prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName">branch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}. |

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyDomainAssociationCertificateSettingsOutputReference <a name="AmplifyDomainAssociationCertificateSettingsOutputReference" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resetCustomCertificateArn">reset_custom_certificate_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_certificate_arn` <a name="reset_custom_certificate_arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.resetCustomCertificateArn"></a>

```python
def reset_custom_certificate_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.certificateVerificationDnsRecord">certificate_verification_dns_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArnInput">custom_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArn">custom_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_verification_dns_record`<sup>Required</sup> <a name="certificate_verification_dns_record" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.certificateVerificationDnsRecord"></a>

```python
certificate_verification_dns_record: str
```

- *Type:* str

---

##### `custom_certificate_arn_input`<sup>Optional</sup> <a name="custom_certificate_arn_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArnInput"></a>

```python
custom_certificate_arn_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `custom_certificate_arn`<sup>Required</sup> <a name="custom_certificate_arn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.customCertificateArn"></a>

```python
custom_certificate_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AmplifyDomainAssociationCertificateSettings
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationCertificateSettings">AmplifyDomainAssociationCertificateSettings</a>

---


### AmplifyDomainAssociationSubDomainList <a name="AmplifyDomainAssociationSubDomainList" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AmplifyDomainAssociationSubDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AmplifyDomainAssociationSubDomain]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]]

---


### AmplifyDomainAssociationSubDomainOutputReference <a name="AmplifyDomainAssociationSubDomainOutputReference" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import amplify_domain_association

amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord">dns_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified">verified</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput">branch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName">branch_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_record`<sup>Required</sup> <a name="dns_record" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.dnsRecord"></a>

```python
dns_record: str
```

- *Type:* str

---

##### `verified`<sup>Required</sup> <a name="verified" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.verified"></a>

```python
verified: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `branch_name_input`<sup>Optional</sup> <a name="branch_name_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchNameInput"></a>

```python
branch_name_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `branch_name`<sup>Required</sup> <a name="branch_name" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.branchName"></a>

```python
branch_name: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomainOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AmplifyDomainAssociationSubDomain]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.amplifyDomainAssociation.AmplifyDomainAssociationSubDomain">AmplifyDomainAssociationSubDomain</a>]

---



