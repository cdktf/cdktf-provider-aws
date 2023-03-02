# `grafanaWorkspaceSamlConfiguration` Submodule <a name="`grafanaWorkspaceSamlConfiguration` Submodule" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceSamlConfiguration <a name="GrafanaWorkspaceSamlConfiguration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration aws_grafana_workspace_saml_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfiguration;

GrafanaWorkspaceSamlConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .editorRoleValues(java.util.List<java.lang.String>)
    .workspaceId(java.lang.String)
//  .adminRoleValues(java.util.List<java.lang.String>)
//  .allowedOrganizations(java.util.List<java.lang.String>)
//  .emailAssertion(java.lang.String)
//  .groupsAssertion(java.lang.String)
//  .id(java.lang.String)
//  .idpMetadataUrl(java.lang.String)
//  .idpMetadataXml(java.lang.String)
//  .loginAssertion(java.lang.String)
//  .loginValidityDuration(java.lang.Number)
//  .nameAssertion(java.lang.String)
//  .orgAssertion(java.lang.String)
//  .roleAssertion(java.lang.String)
//  .timeouts(GrafanaWorkspaceSamlConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.editorRoleValues">editorRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.adminRoleValues">adminRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.allowedOrganizations">allowedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.emailAssertion">emailAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.groupsAssertion">groupsAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginAssertion">loginAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginValidityDuration">loginValidityDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.nameAssertion">nameAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.orgAssertion">orgAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.roleAssertion">roleAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `editorRoleValues`<sup>Required</sup> <a name="editorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.editorRoleValues"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `adminRoleValues`<sup>Optional</sup> <a name="adminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.adminRoleValues"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.allowedOrganizations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `emailAssertion`<sup>Optional</sup> <a name="emailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.emailAssertion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `groupsAssertion`<sup>Optional</sup> <a name="groupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.groupsAssertion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `idpMetadataXml`<sup>Optional</sup> <a name="idpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.idpMetadataXml"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `loginAssertion`<sup>Optional</sup> <a name="loginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginAssertion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `loginValidityDuration`<sup>Optional</sup> <a name="loginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.loginValidityDuration"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `nameAssertion`<sup>Optional</sup> <a name="nameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.nameAssertion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `orgAssertion`<sup>Optional</sup> <a name="orgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.orgAssertion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `roleAssertion`<sup>Optional</sup> <a name="roleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.Initializer.parameter.roleAssertion"></a>

- *Type:* java.lang.String

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
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues">resetAdminRoleValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations">resetAllowedOrganizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion">resetEmailAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion">resetGroupsAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl">resetIdpMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml">resetIdpMetadataXml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion">resetLoginAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration">resetLoginValidityDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion">resetNameAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion">resetOrgAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion">resetRoleAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts"></a>

```java
public void putTimeouts(GrafanaWorkspaceSamlConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

---

##### `resetAdminRoleValues` <a name="resetAdminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAdminRoleValues"></a>

```java
public void resetAdminRoleValues()
```

##### `resetAllowedOrganizations` <a name="resetAllowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetAllowedOrganizations"></a>

```java
public void resetAllowedOrganizations()
```

##### `resetEmailAssertion` <a name="resetEmailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetEmailAssertion"></a>

```java
public void resetEmailAssertion()
```

##### `resetGroupsAssertion` <a name="resetGroupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetGroupsAssertion"></a>

```java
public void resetGroupsAssertion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetIdpMetadataUrl` <a name="resetIdpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataUrl"></a>

```java
public void resetIdpMetadataUrl()
```

##### `resetIdpMetadataXml` <a name="resetIdpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetIdpMetadataXml"></a>

```java
public void resetIdpMetadataXml()
```

##### `resetLoginAssertion` <a name="resetLoginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginAssertion"></a>

```java
public void resetLoginAssertion()
```

##### `resetLoginValidityDuration` <a name="resetLoginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetLoginValidityDuration"></a>

```java
public void resetLoginValidityDuration()
```

##### `resetNameAssertion` <a name="resetNameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetNameAssertion"></a>

```java
public void resetNameAssertion()
```

##### `resetOrgAssertion` <a name="resetOrgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetOrgAssertion"></a>

```java
public void resetOrgAssertion()
```

##### `resetRoleAssertion` <a name="resetRoleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetRoleAssertion"></a>

```java
public void resetRoleAssertion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfiguration;

GrafanaWorkspaceSamlConfiguration.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfiguration;

GrafanaWorkspaceSamlConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfiguration;

GrafanaWorkspaceSamlConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput">adminRoleValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput">allowedOrganizationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput">editorRoleValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput">emailAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput">groupsAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput">idpMetadataUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput">loginAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput">loginValidityDurationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput">nameAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput">orgAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput">roleAssertionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues">adminRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations">allowedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues">editorRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion">emailAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion">groupsAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion">loginAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration">loginValidityDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion">nameAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion">orgAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion">roleAssertion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeouts"></a>

```java
public GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference">GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference</a>

---

##### `adminRoleValuesInput`<sup>Optional</sup> <a name="adminRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValuesInput"></a>

```java
public java.util.List<java.lang.String> getAdminRoleValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrganizationsInput`<sup>Optional</sup> <a name="allowedOrganizationsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizationsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `editorRoleValuesInput`<sup>Optional</sup> <a name="editorRoleValuesInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValuesInput"></a>

```java
public java.util.List<java.lang.String> getEditorRoleValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAssertionInput`<sup>Optional</sup> <a name="emailAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertionInput"></a>

```java
public java.lang.String getEmailAssertionInput();
```

- *Type:* java.lang.String

---

##### `groupsAssertionInput`<sup>Optional</sup> <a name="groupsAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertionInput"></a>

```java
public java.lang.String getGroupsAssertionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrlInput`<sup>Optional</sup> <a name="idpMetadataUrlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrlInput"></a>

```java
public java.lang.String getIdpMetadataUrlInput();
```

- *Type:* java.lang.String

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXmlInput"></a>

```java
public java.lang.String getIdpMetadataXmlInput();
```

- *Type:* java.lang.String

---

##### `loginAssertionInput`<sup>Optional</sup> <a name="loginAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertionInput"></a>

```java
public java.lang.String getLoginAssertionInput();
```

- *Type:* java.lang.String

---

##### `loginValidityDurationInput`<sup>Optional</sup> <a name="loginValidityDurationInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDurationInput"></a>

```java
public java.lang.Number getLoginValidityDurationInput();
```

- *Type:* java.lang.Number

---

##### `nameAssertionInput`<sup>Optional</sup> <a name="nameAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertionInput"></a>

```java
public java.lang.String getNameAssertionInput();
```

- *Type:* java.lang.String

---

##### `orgAssertionInput`<sup>Optional</sup> <a name="orgAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertionInput"></a>

```java
public java.lang.String getOrgAssertionInput();
```

- *Type:* java.lang.String

---

##### `roleAssertionInput`<sup>Optional</sup> <a name="roleAssertionInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertionInput"></a>

```java
public java.lang.String getRoleAssertionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `adminRoleValues`<sup>Required</sup> <a name="adminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.adminRoleValues"></a>

```java
public java.util.List<java.lang.String> getAdminRoleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrganizations`<sup>Required</sup> <a name="allowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.allowedOrganizations"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `editorRoleValues`<sup>Required</sup> <a name="editorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.editorRoleValues"></a>

```java
public java.util.List<java.lang.String> getEditorRoleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAssertion`<sup>Required</sup> <a name="emailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.emailAssertion"></a>

```java
public java.lang.String getEmailAssertion();
```

- *Type:* java.lang.String

---

##### `groupsAssertion`<sup>Required</sup> <a name="groupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.groupsAssertion"></a>

```java
public java.lang.String getGroupsAssertion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idpMetadataUrl`<sup>Required</sup> <a name="idpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

---

##### `loginAssertion`<sup>Required</sup> <a name="loginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginAssertion"></a>

```java
public java.lang.String getLoginAssertion();
```

- *Type:* java.lang.String

---

##### `loginValidityDuration`<sup>Required</sup> <a name="loginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.loginValidityDuration"></a>

```java
public java.lang.Number getLoginValidityDuration();
```

- *Type:* java.lang.Number

---

##### `nameAssertion`<sup>Required</sup> <a name="nameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.nameAssertion"></a>

```java
public java.lang.String getNameAssertion();
```

- *Type:* java.lang.String

---

##### `orgAssertion`<sup>Required</sup> <a name="orgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.orgAssertion"></a>

```java
public java.lang.String getOrgAssertion();
```

- *Type:* java.lang.String

---

##### `roleAssertion`<sup>Required</sup> <a name="roleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.roleAssertion"></a>

```java
public java.lang.String getRoleAssertion();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceSamlConfigurationConfig <a name="GrafanaWorkspaceSamlConfigurationConfig" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfigurationConfig;

GrafanaWorkspaceSamlConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .editorRoleValues(java.util.List<java.lang.String>)
    .workspaceId(java.lang.String)
//  .adminRoleValues(java.util.List<java.lang.String>)
//  .allowedOrganizations(java.util.List<java.lang.String>)
//  .emailAssertion(java.lang.String)
//  .groupsAssertion(java.lang.String)
//  .id(java.lang.String)
//  .idpMetadataUrl(java.lang.String)
//  .idpMetadataXml(java.lang.String)
//  .loginAssertion(java.lang.String)
//  .loginValidityDuration(java.lang.Number)
//  .nameAssertion(java.lang.String)
//  .orgAssertion(java.lang.String)
//  .roleAssertion(java.lang.String)
//  .timeouts(GrafanaWorkspaceSamlConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues">editorRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues">adminRoleValues</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations">allowedOrganizations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion">emailAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion">groupsAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl">idpMetadataUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml">idpMetadataXml</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion">loginAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration">loginValidityDuration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion">nameAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion">orgAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion">roleAssertion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `editorRoleValues`<sup>Required</sup> <a name="editorRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.editorRoleValues"></a>

```java
public java.util.List<java.lang.String> getEditorRoleValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#editor_role_values GrafanaWorkspaceSamlConfiguration#editor_role_values}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#workspace_id GrafanaWorkspaceSamlConfiguration#workspace_id}.

---

##### `adminRoleValues`<sup>Optional</sup> <a name="adminRoleValues" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.adminRoleValues"></a>

```java
public java.util.List<java.lang.String> getAdminRoleValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#admin_role_values GrafanaWorkspaceSamlConfiguration#admin_role_values}.

---

##### `allowedOrganizations`<sup>Optional</sup> <a name="allowedOrganizations" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.allowedOrganizations"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#allowed_organizations GrafanaWorkspaceSamlConfiguration#allowed_organizations}.

---

##### `emailAssertion`<sup>Optional</sup> <a name="emailAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.emailAssertion"></a>

```java
public java.lang.String getEmailAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#email_assertion GrafanaWorkspaceSamlConfiguration#email_assertion}.

---

##### `groupsAssertion`<sup>Optional</sup> <a name="groupsAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.groupsAssertion"></a>

```java
public java.lang.String getGroupsAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#groups_assertion GrafanaWorkspaceSamlConfiguration#groups_assertion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#id GrafanaWorkspaceSamlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idpMetadataUrl`<sup>Optional</sup> <a name="idpMetadataUrl" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataUrl"></a>

```java
public java.lang.String getIdpMetadataUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_url GrafanaWorkspaceSamlConfiguration#idp_metadata_url}.

---

##### `idpMetadataXml`<sup>Optional</sup> <a name="idpMetadataXml" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.idpMetadataXml"></a>

```java
public java.lang.String getIdpMetadataXml();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#idp_metadata_xml GrafanaWorkspaceSamlConfiguration#idp_metadata_xml}.

---

##### `loginAssertion`<sup>Optional</sup> <a name="loginAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginAssertion"></a>

```java
public java.lang.String getLoginAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_assertion GrafanaWorkspaceSamlConfiguration#login_assertion}.

---

##### `loginValidityDuration`<sup>Optional</sup> <a name="loginValidityDuration" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.loginValidityDuration"></a>

```java
public java.lang.Number getLoginValidityDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#login_validity_duration GrafanaWorkspaceSamlConfiguration#login_validity_duration}.

---

##### `nameAssertion`<sup>Optional</sup> <a name="nameAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.nameAssertion"></a>

```java
public java.lang.String getNameAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#name_assertion GrafanaWorkspaceSamlConfiguration#name_assertion}.

---

##### `orgAssertion`<sup>Optional</sup> <a name="orgAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.orgAssertion"></a>

```java
public java.lang.String getOrgAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#org_assertion GrafanaWorkspaceSamlConfiguration#org_assertion}.

---

##### `roleAssertion`<sup>Optional</sup> <a name="roleAssertion" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.roleAssertion"></a>

```java
public java.lang.String getRoleAssertion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#role_assertion GrafanaWorkspaceSamlConfiguration#role_assertion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationConfig.property.timeouts"></a>

```java
public GrafanaWorkspaceSamlConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#timeouts GrafanaWorkspaceSamlConfiguration#timeouts}

---

### GrafanaWorkspaceSamlConfigurationTimeouts <a name="GrafanaWorkspaceSamlConfigurationTimeouts" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfigurationTimeouts;

GrafanaWorkspaceSamlConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#create GrafanaWorkspaceSamlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/grafana_workspace_saml_configuration#delete GrafanaWorkspaceSamlConfiguration#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference <a name="GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace_saml_configuration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference;

new GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspaceSamlConfiguration.GrafanaWorkspaceSamlConfigurationTimeouts">GrafanaWorkspaceSamlConfigurationTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



