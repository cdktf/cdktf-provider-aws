# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktf/provider-aws.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set aws_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .administrationRoleArn(java.lang.String)
//  .autoDeployment(CloudformationStackSetAutoDeployment)
//  .callAs(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .executionRoleName(java.lang.String)
//  .id(java.lang.String)
//  .managedExecution(CloudformationStackSetManagedExecution)
//  .operationPreferences(CloudformationStackSetOperationPreferences)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .permissionModel(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeouts(CloudformationStackSetTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs">callAs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution">managedExecution</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | managed_execution block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="administrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `autoDeployment`<sup>Optional</sup> <a name="autoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `executionRoleName`<sup>Optional</sup> <a name="executionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedExecution`<sup>Optional</sup> <a name="managedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

managed_execution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">putAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putManagedExecution">putManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">putOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">resetAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">resetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs">resetCallAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities">resetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">resetExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetManagedExecution">resetManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">resetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">resetTemplateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoDeployment` <a name="putAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```java
public void putAutoDeployment(CloudformationStackSetAutoDeployment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `putManagedExecution` <a name="putManagedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putManagedExecution"></a>

```java
public void putManagedExecution(CloudformationStackSetManagedExecution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putManagedExecution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---

##### `putOperationPreferences` <a name="putOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```java
public void putOperationPreferences(CloudformationStackSetOperationPreferences value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts"></a>

```java
public void putTimeouts(CloudformationStackSetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

---

##### `resetAdministrationRoleArn` <a name="resetAdministrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```java
public void resetAdministrationRoleArn()
```

##### `resetAutoDeployment` <a name="resetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```java
public void resetAutoDeployment()
```

##### `resetCallAs` <a name="resetCallAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```java
public void resetCallAs()
```

##### `resetCapabilities` <a name="resetCapabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```java
public void resetCapabilities()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExecutionRoleName` <a name="resetExecutionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```java
public void resetExecutionRoleName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId"></a>

```java
public void resetId()
```

##### `resetManagedExecution` <a name="resetManagedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetManagedExecution"></a>

```java
public void resetManagedExecution()
```

##### `resetOperationPreferences` <a name="resetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```java
public void resetOperationPreferences()
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel"></a>

```java
public void resetPermissionModel()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```java
public void resetTemplateBody()
```

##### `resetTemplateUrl` <a name="resetTemplateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```java
public void resetTemplateUrl()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudformationStackSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSet;

CloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudformationStackSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudformationStackSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudformationStackSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudformationStackSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudformationStackSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.managedExecution">managedExecution</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId">stackSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">administrationRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">autoDeploymentInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput">callAsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">executionRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput">managedExecutionInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">operationPreferencesInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput">parametersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">permissionModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">templateBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">templateUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs">callAs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `autoDeployment`<sup>Required</sup> <a name="autoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```java
public CloudformationStackSetAutoDeploymentOutputReference getAutoDeployment();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `managedExecution`<sup>Required</sup> <a name="managedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.managedExecution"></a>

```java
public CloudformationStackSetManagedExecutionOutputReference getManagedExecution();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a>

---

##### `operationPreferences`<sup>Required</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```java
public CloudformationStackSetOperationPreferencesOutputReference getOperationPreferences();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `stackSetId`<sup>Required</sup> <a name="stackSetId" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```java
public java.lang.String getStackSetId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts"></a>

```java
public CloudformationStackSetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a>

---

##### `administrationRoleArnInput`<sup>Optional</sup> <a name="administrationRoleArnInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```java
public java.lang.String getAdministrationRoleArnInput();
```

- *Type:* java.lang.String

---

##### `autoDeploymentInput`<sup>Optional</sup> <a name="autoDeploymentInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```java
public CloudformationStackSetAutoDeployment getAutoDeploymentInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `callAsInput`<sup>Optional</sup> <a name="callAsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```java
public java.lang.String getCallAsInput();
```

- *Type:* java.lang.String

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `executionRoleNameInput`<sup>Optional</sup> <a name="executionRoleNameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```java
public java.lang.String getExecutionRoleNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedExecutionInput`<sup>Optional</sup> <a name="managedExecutionInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput"></a>

```java
public CloudformationStackSetManagedExecution getManagedExecutionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `operationPreferencesInput`<sup>Optional</sup> <a name="operationPreferencesInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```java
public CloudformationStackSetOperationPreferences getOperationPreferencesInput();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParametersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```java
public java.lang.String getPermissionModelInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```java
public java.lang.String getTemplateBodyInput();
```

- *Type:* java.lang.String

---

##### `templateUrlInput`<sup>Optional</sup> <a name="templateUrlInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```java
public java.lang.String getTemplateUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

---

##### `administrationRoleArn`<sup>Required</sup> <a name="administrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```java
public java.lang.String getAdministrationRoleArn();
```

- *Type:* java.lang.String

---

##### `callAs`<sup>Required</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```java
public java.lang.String getCallAs();
```

- *Type:* java.lang.String

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `executionRoleName`<sup>Required</sup> <a name="executionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```java
public java.lang.String getExecutionRoleName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```java
public java.lang.String getPermissionModel();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetAutoDeployment;

CloudformationStackSetAutoDeployment.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .retainStacksOnAccountRemoval(java.lang.Boolean)
//  .retainStacksOnAccountRemoval(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}.

---

##### `retainStacksOnAccountRemoval`<sup>Optional</sup> <a name="retainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```java
public java.lang.Object getRetainStacksOnAccountRemoval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetConfig;

CloudformationStackSetConfig.builder()
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
    .name(java.lang.String)
//  .administrationRoleArn(java.lang.String)
//  .autoDeployment(CloudformationStackSetAutoDeployment)
//  .callAs(java.lang.String)
//  .capabilities(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .executionRoleName(java.lang.String)
//  .id(java.lang.String)
//  .managedExecution(CloudformationStackSetManagedExecution)
//  .operationPreferences(CloudformationStackSetOperationPreferences)
//  .parameters(java.util.Map<java.lang.String, java.lang.String>)
//  .permissionModel(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .templateBody(java.lang.String)
//  .templateUrl(java.lang.String)
//  .timeouts(CloudformationStackSetTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">administrationRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">autoDeployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">callAs</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">executionRoleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution">managedExecution</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | managed_execution block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">operationPreferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">parameters</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">permissionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">templateBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">templateUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `administrationRoleArn`<sup>Optional</sup> <a name="administrationRoleArn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```java
public java.lang.String getAdministrationRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `autoDeployment`<sup>Optional</sup> <a name="autoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```java
public CloudformationStackSetAutoDeployment getAutoDeployment();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `callAs`<sup>Optional</sup> <a name="callAs" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```java
public java.lang.String getCallAs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `executionRoleName`<sup>Optional</sup> <a name="executionRoleName" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```java
public java.lang.String getExecutionRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedExecution`<sup>Optional</sup> <a name="managedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution"></a>

```java
public CloudformationStackSetManagedExecution getManagedExecution();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

managed_execution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operationPreferences`<sup>Optional</sup> <a name="operationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```java
public CloudformationStackSetOperationPreferences getOperationPreferences();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getParameters();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```java
public java.lang.String getPermissionModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```java
public java.lang.String getTemplateBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `templateUrl`<sup>Optional</sup> <a name="templateUrl" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```java
public java.lang.String getTemplateUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts"></a>

```java
public CloudformationStackSetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

### CloudformationStackSetManagedExecution <a name="CloudformationStackSetManagedExecution" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetManagedExecution;

CloudformationStackSetManagedExecution.builder()
//  .active(java.lang.Boolean)
//  .active(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}.

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetOperationPreferences;

CloudformationStackSetOperationPreferences.builder()
//  .failureToleranceCount(java.lang.Number)
//  .failureTolerancePercentage(java.lang.Number)
//  .maxConcurrentCount(java.lang.Number)
//  .maxConcurrentPercentage(java.lang.Number)
//  .regionConcurrencyType(java.lang.String)
//  .regionOrder(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">failureToleranceCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">regionOrder</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `failureToleranceCount`<sup>Optional</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```java
public java.lang.Number getFailureToleranceCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `failureTolerancePercentage`<sup>Optional</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```java
public java.lang.Number getFailureTolerancePercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `maxConcurrentCount`<sup>Optional</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```java
public java.lang.Number getMaxConcurrentCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `maxConcurrentPercentage`<sup>Optional</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```java
public java.lang.Number getMaxConcurrentPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `regionConcurrencyType`<sup>Optional</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```java
public java.lang.String getRegionConcurrencyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}.

---

##### `regionOrder`<sup>Optional</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```java
public java.util.List<java.lang.String> getRegionOrder();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetTimeouts <a name="CloudformationStackSetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetTimeouts;

CloudformationStackSetTimeouts.builder()
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#update CloudformationStackSet#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.32.1/docs/resources/cloudformation_stack_set#update CloudformationStackSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetAutoDeploymentOutputReference;

new CloudformationStackSetAutoDeploymentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">resetRetainStacksOnAccountRemoval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRetainStacksOnAccountRemoval` <a name="resetRetainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```java
public void resetRetainStacksOnAccountRemoval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">retainStacksOnAccountRemovalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retainStacksOnAccountRemoval</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retainStacksOnAccountRemovalInput`<sup>Optional</sup> <a name="retainStacksOnAccountRemovalInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```java
public java.lang.Object getRetainStacksOnAccountRemovalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `retainStacksOnAccountRemoval`<sup>Required</sup> <a name="retainStacksOnAccountRemoval" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```java
public java.lang.Object getRetainStacksOnAccountRemoval();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```java
public CloudformationStackSetAutoDeployment getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetManagedExecutionOutputReference <a name="CloudformationStackSetManagedExecutionOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetManagedExecutionOutputReference;

new CloudformationStackSetManagedExecutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive">resetActive</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActive` <a name="resetActive" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive"></a>

```java
public void resetActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue"></a>

```java
public CloudformationStackSetManagedExecution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetOperationPreferencesOutputReference;

new CloudformationStackSetOperationPreferencesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">resetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">resetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">resetMaxConcurrentCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">resetMaxConcurrentPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">resetRegionConcurrencyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">resetRegionOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureToleranceCount` <a name="resetFailureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```java
public void resetFailureToleranceCount()
```

##### `resetFailureTolerancePercentage` <a name="resetFailureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```java
public void resetFailureTolerancePercentage()
```

##### `resetMaxConcurrentCount` <a name="resetMaxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```java
public void resetMaxConcurrentCount()
```

##### `resetMaxConcurrentPercentage` <a name="resetMaxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```java
public void resetMaxConcurrentPercentage()
```

##### `resetRegionConcurrencyType` <a name="resetRegionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```java
public void resetRegionConcurrencyType()
```

##### `resetRegionOrder` <a name="resetRegionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```java
public void resetRegionOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">failureToleranceCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failureTolerancePercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">maxConcurrentCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">maxConcurrentPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">regionConcurrencyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">regionOrderInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failureToleranceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failureTolerancePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">maxConcurrentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">maxConcurrentPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">regionConcurrencyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">regionOrder</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureToleranceCountInput`<sup>Optional</sup> <a name="failureToleranceCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```java
public java.lang.Number getFailureToleranceCountInput();
```

- *Type:* java.lang.Number

---

##### `failureTolerancePercentageInput`<sup>Optional</sup> <a name="failureTolerancePercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```java
public java.lang.Number getFailureTolerancePercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentCountInput`<sup>Optional</sup> <a name="maxConcurrentCountInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```java
public java.lang.Number getMaxConcurrentCountInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentPercentageInput`<sup>Optional</sup> <a name="maxConcurrentPercentageInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```java
public java.lang.Number getMaxConcurrentPercentageInput();
```

- *Type:* java.lang.Number

---

##### `regionConcurrencyTypeInput`<sup>Optional</sup> <a name="regionConcurrencyTypeInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```java
public java.lang.String getRegionConcurrencyTypeInput();
```

- *Type:* java.lang.String

---

##### `regionOrderInput`<sup>Optional</sup> <a name="regionOrderInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```java
public java.util.List<java.lang.String> getRegionOrderInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `failureToleranceCount`<sup>Required</sup> <a name="failureToleranceCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```java
public java.lang.Number getFailureToleranceCount();
```

- *Type:* java.lang.Number

---

##### `failureTolerancePercentage`<sup>Required</sup> <a name="failureTolerancePercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```java
public java.lang.Number getFailureTolerancePercentage();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentCount`<sup>Required</sup> <a name="maxConcurrentCount" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```java
public java.lang.Number getMaxConcurrentCount();
```

- *Type:* java.lang.Number

---

##### `maxConcurrentPercentage`<sup>Required</sup> <a name="maxConcurrentPercentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```java
public java.lang.Number getMaxConcurrentPercentage();
```

- *Type:* java.lang.Number

---

##### `regionConcurrencyType`<sup>Required</sup> <a name="regionConcurrencyType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```java
public java.lang.String getRegionConcurrencyType();
```

- *Type:* java.lang.String

---

##### `regionOrder`<sup>Required</sup> <a name="regionOrder" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```java
public java.util.List<java.lang.String> getRegionOrder();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```java
public CloudformationStackSetOperationPreferences getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetTimeoutsOutputReference <a name="CloudformationStackSetTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cloudformation_stack_set.CloudformationStackSetTimeoutsOutputReference;

new CloudformationStackSetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

---



