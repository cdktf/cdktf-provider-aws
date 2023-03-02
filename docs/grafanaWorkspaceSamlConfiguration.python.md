# `grafanaWorkspaceSamlConfiguration` Submodule <a name="`grafanaWorkspaceSamlConfiguration` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  editor_role_values: typing.List[str],
  workspace_id: str,
  admin_role_values: typing.List[str] = None,
  allowed_organizations: typing.List[str] = None,
  email_assertion: str = None,
  groups_assertion: str = None,
  id: str = None,
  idp_metadata_url: str = None,
  idp_metadata_xml: str = None,
  login_assertion: str = None,
  login_validity_duration: typing.Union[int, float] = None,
  name_assertion: str = None,
  org_assertion: str = None,
  role_assertion: str = None,
  timeouts: GrafanaWorkspaceSamlConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.editorRoleValues">editor_role_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.adminRoleValues">admin_role_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.emailAssertion">email_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.groupsAssertion">groups_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginAssertion">login_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.nameAssertion">name_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.orgAssertion">org_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.roleAssertion">role_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `editor_role_values`<sup>Required</sup> <a name="editor_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.editorRoleValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `admin_role_values`<sup>Optional</sup> <a name="admin_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.adminRoleValues"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `allowed_organizations`<sup>Optional</sup> <a name="allowed_organizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.allowedOrganizations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `email_assertion`<sup>Optional</sup> <a name="email_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.emailAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `groups_assertion`<sup>Optional</sup> <a name="groups_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.groupsAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_metadata_url`<sup>Optional</sup> <a name="idp_metadata_url" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `idp_metadata_xml`<sup>Optional</sup> <a name="idp_metadata_xml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataXml"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `login_assertion`<sup>Optional</sup> <a name="login_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `login_validity_duration`<sup>Optional</sup> <a name="login_validity_duration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginValidityDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `name_assertion`<sup>Optional</sup> <a name="name_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.nameAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `org_assertion`<sup>Optional</sup> <a name="org_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.orgAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `role_assertion`<sup>Optional</sup> <a name="role_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.roleAssertion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues">reset_admin_role_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations">reset_allowed_organizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion">reset_email_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion">reset_groups_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl">reset_idp_metadata_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml">reset_idp_metadata_xml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion">reset_login_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration">reset_login_validity_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion">reset_name_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion">reset_org_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion">reset_role_assertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

##### `reset_admin_role_values` <a name="reset_admin_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues"></a>

```python
def reset_admin_role_values() -> None
```

##### `reset_allowed_organizations` <a name="reset_allowed_organizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations"></a>

```python
def reset_allowed_organizations() -> None
```

##### `reset_email_assertion` <a name="reset_email_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion"></a>

```python
def reset_email_assertion() -> None
```

##### `reset_groups_assertion` <a name="reset_groups_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion"></a>

```python
def reset_groups_assertion() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_metadata_url` <a name="reset_idp_metadata_url" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl"></a>

```python
def reset_idp_metadata_url() -> None
```

##### `reset_idp_metadata_xml` <a name="reset_idp_metadata_xml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml"></a>

```python
def reset_idp_metadata_xml() -> None
```

##### `reset_login_assertion` <a name="reset_login_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion"></a>

```python
def reset_login_assertion() -> None
```

##### `reset_login_validity_duration` <a name="reset_login_validity_duration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration"></a>

```python
def reset_login_validity_duration() -> None
```

##### `reset_name_assertion` <a name="reset_name_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion"></a>

```python
def reset_name_assertion() -> None
```

##### `reset_org_assertion` <a name="reset_org_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion"></a>

```python
def reset_org_assertion() -> None
```

##### `reset_role_assertion` <a name="reset_role_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion"></a>

```python
def reset_role_assertion() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput">admin_role_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput">allowed_organizations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput">editor_role_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput">email_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput">groups_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput">idp_metadata_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput">idp_metadata_xml_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput">login_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput">login_validity_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput">name_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput">org_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput">role_assertion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues">admin_role_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues">editor_role_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion">email_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion">groups_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion">login_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion">name_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion">org_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion">role_assertion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts"></a>

```python
timeouts: GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a>

---

##### `admin_role_values_input`<sup>Optional</sup> <a name="admin_role_values_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput"></a>

```python
admin_role_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organizations_input`<sup>Optional</sup> <a name="allowed_organizations_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput"></a>

```python
allowed_organizations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `editor_role_values_input`<sup>Optional</sup> <a name="editor_role_values_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput"></a>

```python
editor_role_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_assertion_input`<sup>Optional</sup> <a name="email_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput"></a>

```python
email_assertion_input: str
```

- *Type:* str

---

##### `groups_assertion_input`<sup>Optional</sup> <a name="groups_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput"></a>

```python
groups_assertion_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_metadata_url_input`<sup>Optional</sup> <a name="idp_metadata_url_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput"></a>

```python
idp_metadata_url_input: str
```

- *Type:* str

---

##### `idp_metadata_xml_input`<sup>Optional</sup> <a name="idp_metadata_xml_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput"></a>

```python
idp_metadata_xml_input: str
```

- *Type:* str

---

##### `login_assertion_input`<sup>Optional</sup> <a name="login_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput"></a>

```python
login_assertion_input: str
```

- *Type:* str

---

##### `login_validity_duration_input`<sup>Optional</sup> <a name="login_validity_duration_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput"></a>

```python
login_validity_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_assertion_input`<sup>Optional</sup> <a name="name_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput"></a>

```python
name_assertion_input: str
```

- *Type:* str

---

##### `org_assertion_input`<sup>Optional</sup> <a name="org_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput"></a>

```python
org_assertion_input: str
```

- *Type:* str

---

##### `role_assertion_input`<sup>Optional</sup> <a name="role_assertion_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput"></a>

```python
role_assertion_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GrafanaWorkspaceSamlConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `admin_role_values`<sup>Required</sup> <a name="admin_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues"></a>

```python
admin_role_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_organizations`<sup>Required</sup> <a name="allowed_organizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```python
allowed_organizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `editor_role_values`<sup>Required</sup> <a name="editor_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues"></a>

```python
editor_role_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_assertion`<sup>Required</sup> <a name="email_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion"></a>

```python
email_assertion: str
```

- *Type:* str

---

##### `groups_assertion`<sup>Required</sup> <a name="groups_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion"></a>

```python
groups_assertion: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_metadata_url`<sup>Required</sup> <a name="idp_metadata_url" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl"></a>

```python
idp_metadata_url: str
```

- *Type:* str

---

##### `idp_metadata_xml`<sup>Required</sup> <a name="idp_metadata_xml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

---

##### `login_assertion`<sup>Required</sup> <a name="login_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion"></a>

```python
login_assertion: str
```

- *Type:* str

---

##### `login_validity_duration`<sup>Required</sup> <a name="login_validity_duration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```python
login_validity_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_assertion`<sup>Required</sup> <a name="name_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion"></a>

```python
name_assertion: str
```

- *Type:* str

---

##### `org_assertion`<sup>Required</sup> <a name="org_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion"></a>

```python
org_assertion: str
```

- *Type:* str

---

##### `role_assertion`<sup>Required</sup> <a name="role_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion"></a>

```python
role_assertion: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceSamlConfigurationConfig <a name="GrafanaWorkspaceSamlConfigurationConfig" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  editor_role_values: typing.List[str],
  workspace_id: str,
  admin_role_values: typing.List[str] = None,
  allowed_organizations: typing.List[str] = None,
  email_assertion: str = None,
  groups_assertion: str = None,
  id: str = None,
  idp_metadata_url: str = None,
  idp_metadata_xml: str = None,
  login_assertion: str = None,
  login_validity_duration: typing.Union[int, float] = None,
  name_assertion: str = None,
  org_assertion: str = None,
  role_assertion: str = None,
  timeouts: GrafanaWorkspaceSamlConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues">editor_role_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues">admin_role_values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations">allowed_organizations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion">email_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion">groups_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml">idp_metadata_xml</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion">login_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration">login_validity_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion">name_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion">org_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion">role_assertion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `editor_role_values`<sup>Required</sup> <a name="editor_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues"></a>

```python
editor_role_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `admin_role_values`<sup>Optional</sup> <a name="admin_role_values" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues"></a>

```python
admin_role_values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `allowed_organizations`<sup>Optional</sup> <a name="allowed_organizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations"></a>

```python
allowed_organizations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `email_assertion`<sup>Optional</sup> <a name="email_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion"></a>

```python
email_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `groups_assertion`<sup>Optional</sup> <a name="groups_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion"></a>

```python
groups_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_metadata_url`<sup>Optional</sup> <a name="idp_metadata_url" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl"></a>

```python
idp_metadata_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `idp_metadata_xml`<sup>Optional</sup> <a name="idp_metadata_xml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml"></a>

```python
idp_metadata_xml: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `login_assertion`<sup>Optional</sup> <a name="login_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion"></a>

```python
login_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `login_validity_duration`<sup>Optional</sup> <a name="login_validity_duration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration"></a>

```python
login_validity_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `name_assertion`<sup>Optional</sup> <a name="name_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion"></a>

```python
name_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `org_assertion`<sup>Optional</sup> <a name="org_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion"></a>

```python
org_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `role_assertion`<sup>Optional</sup> <a name="role_assertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion"></a>

```python
role_assertion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts"></a>

```python
timeouts: GrafanaWorkspaceSamlConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

### GrafanaWorkspaceSamlConfigurationTimeouts <a name="GrafanaWorkspaceSamlConfigurationTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference <a name="GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import grafana_workspace_saml_configuration

grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GrafanaWorkspaceSamlConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>, cdktf.IResolvable]

---



