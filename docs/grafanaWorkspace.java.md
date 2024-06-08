# `grafanaWorkspace` Submodule <a name="`grafanaWorkspace` Submodule" id="@cdktf/provider-aws.grafanaWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspace <a name="GrafanaWorkspace" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace aws_grafana_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspace;

GrafanaWorkspace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountAccessType(java.lang.String)
    .authenticationProviders(java.util.List<java.lang.String>)
    .permissionType(java.lang.String)
//  .configuration(java.lang.String)
//  .dataSources(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .grafanaVersion(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .networkAccessControl(GrafanaWorkspaceNetworkAccessControl)
//  .notificationDestinations(java.util.List<java.lang.String>)
//  .organizationalUnits(java.util.List<java.lang.String>)
//  .organizationRoleName(java.lang.String)
//  .roleArn(java.lang.String)
//  .stackSetName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GrafanaWorkspaceTimeouts)
//  .vpcConfiguration(GrafanaWorkspaceVpcConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.accountAccessType">accountAccessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.authenticationProviders">authenticationProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.permissionType">permissionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#configuration GrafanaWorkspace#configuration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dataSources">dataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.grafanaVersion">grafanaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#id GrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | network_access_control block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.notificationDestinations">notificationDestinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationRoleName">organizationRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags_all GrafanaWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.accountAccessType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.authenticationProviders"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.permissionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.configuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#configuration GrafanaWorkspace#configuration}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.dataSources"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}.

---

##### `grafanaVersion`<sup>Optional</sup> <a name="grafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.grafanaVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#id GrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.networkAccessControl"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.notificationDestinations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationalUnits"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.organizationRoleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.stackSetName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags_all GrafanaWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#timeouts GrafanaWorkspace#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.Initializer.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl">putNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration">putVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion">resetGrafanaVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl">resetNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations">resetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName">resetOrganizationRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName">resetStackSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration">resetVpcConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkAccessControl` <a name="putNetworkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl"></a>

```java
public void putNetworkAccessControl(GrafanaWorkspaceNetworkAccessControl value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putNetworkAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts"></a>

```java
public void putTimeouts(GrafanaWorkspaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

---

##### `putVpcConfiguration` <a name="putVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration"></a>

```java
public void putVpcConfiguration(GrafanaWorkspaceVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDataSources"></a>

```java
public void resetDataSources()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGrafanaVersion` <a name="resetGrafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetGrafanaVersion"></a>

```java
public void resetGrafanaVersion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkAccessControl` <a name="resetNetworkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNetworkAccessControl"></a>

```java
public void resetNetworkAccessControl()
```

##### `resetNotificationDestinations` <a name="resetNotificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetNotificationDestinations"></a>

```java
public void resetNotificationDestinations()
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationalUnits"></a>

```java
public void resetOrganizationalUnits()
```

##### `resetOrganizationRoleName` <a name="resetOrganizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetOrganizationRoleName"></a>

```java
public void resetOrganizationRoleName()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetStackSetName` <a name="resetStackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetStackSetName"></a>

```java
public void resetStackSetName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVpcConfiguration` <a name="resetVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.resetVpcConfiguration"></a>

```java
public void resetVpcConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrafanaWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspace;

GrafanaWorkspace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspace;

GrafanaWorkspace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspace;

GrafanaWorkspace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspace;

GrafanaWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrafanaWorkspace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GrafanaWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrafanaWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrafanaWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus">samlConfigurationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput">accountAccessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput">authenticationProvidersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput">configurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput">dataSourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput">grafanaVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput">networkAccessControlInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput">notificationDestinationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput">organizationRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput">permissionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput">stackSetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput">vpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType">accountAccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders">authenticationProviders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration">configuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources">dataSources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion">grafanaVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations">notificationDestinations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName">organizationRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `networkAccessControl`<sup>Required</sup> <a name="networkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControl"></a>

```java
public GrafanaWorkspaceNetworkAccessControlOutputReference getNetworkAccessControl();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference">GrafanaWorkspaceNetworkAccessControlOutputReference</a>

---

##### `samlConfigurationStatus`<sup>Required</sup> <a name="samlConfigurationStatus" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.samlConfigurationStatus"></a>

```java
public java.lang.String getSamlConfigurationStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeouts"></a>

```java
public GrafanaWorkspaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference">GrafanaWorkspaceTimeoutsOutputReference</a>

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfiguration"></a>

```java
public GrafanaWorkspaceVpcConfigurationOutputReference getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference">GrafanaWorkspaceVpcConfigurationOutputReference</a>

---

##### `accountAccessTypeInput`<sup>Optional</sup> <a name="accountAccessTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessTypeInput"></a>

```java
public java.lang.String getAccountAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticationProvidersInput`<sup>Optional</sup> <a name="authenticationProvidersInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProvidersInput"></a>

```java
public java.util.List<java.lang.String> getAuthenticationProvidersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configurationInput"></a>

```java
public java.lang.String getConfigurationInput();
```

- *Type:* java.lang.String

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSourcesInput"></a>

```java
public java.util.List<java.lang.String> getDataSourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `grafanaVersionInput`<sup>Optional</sup> <a name="grafanaVersionInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersionInput"></a>

```java
public java.lang.String getGrafanaVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkAccessControlInput`<sup>Optional</sup> <a name="networkAccessControlInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.networkAccessControlInput"></a>

```java
public GrafanaWorkspaceNetworkAccessControl getNetworkAccessControlInput();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---

##### `notificationDestinationsInput`<sup>Optional</sup> <a name="notificationDestinationsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinationsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationDestinationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnitsInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnitsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationRoleNameInput`<sup>Optional</sup> <a name="organizationRoleNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleNameInput"></a>

```java
public java.lang.String getOrganizationRoleNameInput();
```

- *Type:* java.lang.String

---

##### `permissionTypeInput`<sup>Optional</sup> <a name="permissionTypeInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionTypeInput"></a>

```java
public java.lang.String getPermissionTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetNameInput"></a>

```java
public java.lang.String getStackSetNameInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

---

##### `vpcConfigurationInput`<sup>Optional</sup> <a name="vpcConfigurationInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.vpcConfigurationInput"></a>

```java
public GrafanaWorkspaceVpcConfiguration getVpcConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.accountAccessType"></a>

```java
public java.lang.String getAccountAccessType();
```

- *Type:* java.lang.String

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.authenticationProviders"></a>

```java
public java.util.List<java.lang.String> getAuthenticationProviders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.dataSources"></a>

```java
public java.util.List<java.lang.String> getDataSources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `grafanaVersion`<sup>Required</sup> <a name="grafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.grafanaVersion"></a>

```java
public java.lang.String getGrafanaVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `notificationDestinations`<sup>Required</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.notificationDestinations"></a>

```java
public java.util.List<java.lang.String> getNotificationDestinations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `organizationRoleName`<sup>Required</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.organizationRoleName"></a>

```java
public java.lang.String getOrganizationRoleName();
```

- *Type:* java.lang.String

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceConfig <a name="GrafanaWorkspaceConfig" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceConfig;

GrafanaWorkspaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .accountAccessType(java.lang.String)
    .authenticationProviders(java.util.List<java.lang.String>)
    .permissionType(java.lang.String)
//  .configuration(java.lang.String)
//  .dataSources(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .grafanaVersion(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .networkAccessControl(GrafanaWorkspaceNetworkAccessControl)
//  .notificationDestinations(java.util.List<java.lang.String>)
//  .organizationalUnits(java.util.List<java.lang.String>)
//  .organizationRoleName(java.lang.String)
//  .roleArn(java.lang.String)
//  .stackSetName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(GrafanaWorkspaceTimeouts)
//  .vpcConfiguration(GrafanaWorkspaceVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType">accountAccessType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders">authenticationProviders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType">permissionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration">configuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#configuration GrafanaWorkspace#configuration}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources">dataSources</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion">grafanaVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#id GrafanaWorkspace#id}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl">networkAccessControl</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | network_access_control block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations">notificationDestinations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits">organizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName">organizationRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName">stackSetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags_all GrafanaWorkspace#tags_all}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | vpc_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountAccessType`<sup>Required</sup> <a name="accountAccessType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.accountAccessType"></a>

```java
public java.lang.String getAccountAccessType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#account_access_type GrafanaWorkspace#account_access_type}.

---

##### `authenticationProviders`<sup>Required</sup> <a name="authenticationProviders" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.authenticationProviders"></a>

```java
public java.util.List<java.lang.String> getAuthenticationProviders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#authentication_providers GrafanaWorkspace#authentication_providers}.

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.permissionType"></a>

```java
public java.lang.String getPermissionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#permission_type GrafanaWorkspace#permission_type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.configuration"></a>

```java
public java.lang.String getConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#configuration GrafanaWorkspace#configuration}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.dataSources"></a>

```java
public java.util.List<java.lang.String> getDataSources();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#data_sources GrafanaWorkspace#data_sources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#description GrafanaWorkspace#description}.

---

##### `grafanaVersion`<sup>Optional</sup> <a name="grafanaVersion" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.grafanaVersion"></a>

```java
public java.lang.String getGrafanaVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#grafana_version GrafanaWorkspace#grafana_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#id GrafanaWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#name GrafanaWorkspace#name}.

---

##### `networkAccessControl`<sup>Optional</sup> <a name="networkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.networkAccessControl"></a>

```java
public GrafanaWorkspaceNetworkAccessControl getNetworkAccessControl();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

network_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#network_access_control GrafanaWorkspace#network_access_control}

---

##### `notificationDestinations`<sup>Optional</sup> <a name="notificationDestinations" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.notificationDestinations"></a>

```java
public java.util.List<java.lang.String> getNotificationDestinations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#notification_destinations GrafanaWorkspace#notification_destinations}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationalUnits"></a>

```java
public java.util.List<java.lang.String> getOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organizational_units GrafanaWorkspace#organizational_units}.

---

##### `organizationRoleName`<sup>Optional</sup> <a name="organizationRoleName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.organizationRoleName"></a>

```java
public java.lang.String getOrganizationRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#organization_role_name GrafanaWorkspace#organization_role_name}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#role_arn GrafanaWorkspace#role_arn}.

---

##### `stackSetName`<sup>Optional</sup> <a name="stackSetName" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.stackSetName"></a>

```java
public java.lang.String getStackSetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#stack_set_name GrafanaWorkspace#stack_set_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags GrafanaWorkspace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#tags_all GrafanaWorkspace#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.timeouts"></a>

```java
public GrafanaWorkspaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#timeouts GrafanaWorkspace#timeouts}

---

##### `vpcConfiguration`<sup>Optional</sup> <a name="vpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceConfig.property.vpcConfiguration"></a>

```java
public GrafanaWorkspaceVpcConfiguration getVpcConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#vpc_configuration GrafanaWorkspace#vpc_configuration}

---

### GrafanaWorkspaceNetworkAccessControl <a name="GrafanaWorkspaceNetworkAccessControl" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceNetworkAccessControl;

GrafanaWorkspaceNetworkAccessControl.builder()
    .prefixListIds(java.util.List<java.lang.String>)
    .vpceIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}. |

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#prefix_list_ids GrafanaWorkspace#prefix_list_ids}.

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#vpce_ids GrafanaWorkspace#vpce_ids}.

---

### GrafanaWorkspaceTimeouts <a name="GrafanaWorkspaceTimeouts" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceTimeouts;

GrafanaWorkspaceTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#create GrafanaWorkspace#create}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#update GrafanaWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#create GrafanaWorkspace#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#update GrafanaWorkspace#update}.

---

### GrafanaWorkspaceVpcConfiguration <a name="GrafanaWorkspaceVpcConfiguration" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceVpcConfiguration;

GrafanaWorkspaceVpcConfiguration.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#security_group_ids GrafanaWorkspace#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.53.0/docs/resources/grafana_workspace#subnet_ids GrafanaWorkspace#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaWorkspaceNetworkAccessControlOutputReference <a name="GrafanaWorkspaceNetworkAccessControlOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceNetworkAccessControlOutputReference;

new GrafanaWorkspaceNetworkAccessControlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput">vpceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds">prefixListIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds">vpceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIdsInput"></a>

```java
public java.util.List<java.lang.String> getPrefixListIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpceIdsInput`<sup>Optional</sup> <a name="vpceIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIdsInput"></a>

```java
public java.util.List<java.lang.String> getVpceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.prefixListIds"></a>

```java
public java.util.List<java.lang.String> getPrefixListIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpceIds`<sup>Required</sup> <a name="vpceIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.vpceIds"></a>

```java
public java.util.List<java.lang.String> getVpceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControlOutputReference.property.internalValue"></a>

```java
public GrafanaWorkspaceNetworkAccessControl getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceNetworkAccessControl">GrafanaWorkspaceNetworkAccessControl</a>

---


### GrafanaWorkspaceTimeoutsOutputReference <a name="GrafanaWorkspaceTimeoutsOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceTimeoutsOutputReference;

new GrafanaWorkspaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceTimeouts">GrafanaWorkspaceTimeouts</a>

---


### GrafanaWorkspaceVpcConfigurationOutputReference <a name="GrafanaWorkspaceVpcConfigurationOutputReference" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.grafana_workspace.GrafanaWorkspaceVpcConfigurationOutputReference;

new GrafanaWorkspaceVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfigurationOutputReference.property.internalValue"></a>

```java
public GrafanaWorkspaceVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.grafanaWorkspace.GrafanaWorkspaceVpcConfiguration">GrafanaWorkspaceVpcConfiguration</a>

---



