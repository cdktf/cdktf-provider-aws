# `codebuildWebhook` Submodule <a name="`codebuildWebhook` Submodule" id="@cdktf/provider-aws.codebuildWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildWebhook <a name="CodebuildWebhook" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook aws_codebuild_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhook;

CodebuildWebhook.Builder.create(Construct scope, java.lang.String id)
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
    .projectName(java.lang.String)
//  .branchFilter(java.lang.String)
//  .buildType(java.lang.String)
//  .filterGroup(IResolvable)
//  .filterGroup(java.util.List<CodebuildWebhookFilterGroup>)
//  .id(java.lang.String)
//  .manualCreation(java.lang.Boolean)
//  .manualCreation(IResolvable)
//  .region(java.lang.String)
//  .scopeConfiguration(CodebuildWebhookScopeConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.projectName">projectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.branchFilter">branchFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.buildType">buildType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.filterGroup">filterGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>></code> | filter_group block. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.manualCreation">manualCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | scope_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.projectName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.branchFilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.buildType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filterGroup`<sup>Optional</sup> <a name="filterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.filterGroup"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>>

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manualCreation`<sup>Optional</sup> <a name="manualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.manualCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#region CodebuildWebhook#region}

---

##### `scopeConfiguration`<sup>Optional</sup> <a name="scopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scopeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup">putFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration">putScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter">resetBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup">resetFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation">resetManualCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration">resetScopeConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilterGroup` <a name="putFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup"></a>

```java
public void putFilterGroup(IResolvable OR java.util.List<CodebuildWebhookFilterGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>>

---

##### `putScopeConfiguration` <a name="putScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration"></a>

```java
public void putScopeConfiguration(CodebuildWebhookScopeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---

##### `resetBranchFilter` <a name="resetBranchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter"></a>

```java
public void resetBranchFilter()
```

##### `resetBuildType` <a name="resetBuildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType"></a>

```java
public void resetBuildType()
```

##### `resetFilterGroup` <a name="resetFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup"></a>

```java
public void resetFilterGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId"></a>

```java
public void resetId()
```

##### `resetManualCreation` <a name="resetManualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation"></a>

```java
public void resetManualCreation()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScopeConfiguration` <a name="resetScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration"></a>

```java
public void resetScopeConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhook;

CodebuildWebhook.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhook;

CodebuildWebhook.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhook;

CodebuildWebhook.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhook;

CodebuildWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CodebuildWebhook.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CodebuildWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CodebuildWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup">filterGroup</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl">payloadUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput">branchFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput">buildTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput">filterGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput">manualCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput">projectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput">scopeConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter">branchFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType">buildType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation">manualCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName">projectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `filterGroup`<sup>Required</sup> <a name="filterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup"></a>

```java
public CodebuildWebhookFilterGroupList getFilterGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a>

---

##### `payloadUrl`<sup>Required</sup> <a name="payloadUrl" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl"></a>

```java
public java.lang.String getPayloadUrl();
```

- *Type:* java.lang.String

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration"></a>

```java
public CodebuildWebhookScopeConfigurationOutputReference getScopeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `branchFilterInput`<sup>Optional</sup> <a name="branchFilterInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput"></a>

```java
public java.lang.String getBranchFilterInput();
```

- *Type:* java.lang.String

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput"></a>

```java
public java.lang.String getBuildTypeInput();
```

- *Type:* java.lang.String

---

##### `filterGroupInput`<sup>Optional</sup> <a name="filterGroupInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput"></a>

```java
public java.lang.Object getFilterGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `manualCreationInput`<sup>Optional</sup> <a name="manualCreationInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput"></a>

```java
public java.lang.Object getManualCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput"></a>

```java
public java.lang.String getProjectNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scopeConfigurationInput`<sup>Optional</sup> <a name="scopeConfigurationInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput"></a>

```java
public CodebuildWebhookScopeConfiguration getScopeConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---

##### `branchFilter`<sup>Required</sup> <a name="branchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter"></a>

```java
public java.lang.String getBranchFilter();
```

- *Type:* java.lang.String

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `manualCreation`<sup>Required</sup> <a name="manualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation"></a>

```java
public java.lang.Object getManualCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildWebhookConfig <a name="CodebuildWebhookConfig" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookConfig;

CodebuildWebhookConfig.builder()
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
    .projectName(java.lang.String)
//  .branchFilter(java.lang.String)
//  .buildType(java.lang.String)
//  .filterGroup(IResolvable)
//  .filterGroup(java.util.List<CodebuildWebhookFilterGroup>)
//  .id(java.lang.String)
//  .manualCreation(java.lang.Boolean)
//  .manualCreation(IResolvable)
//  .region(java.lang.String)
//  .scopeConfiguration(CodebuildWebhookScopeConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName">projectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter">branchFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType">buildType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup">filterGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>></code> | filter_group block. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation">manualCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | scope_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName"></a>

```java
public java.lang.String getProjectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter"></a>

```java
public java.lang.String getBranchFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType"></a>

```java
public java.lang.String getBuildType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filterGroup`<sup>Optional</sup> <a name="filterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup"></a>

```java
public java.lang.Object getFilterGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>>

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manualCreation`<sup>Optional</sup> <a name="manualCreation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation"></a>

```java
public java.lang.Object getManualCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#region CodebuildWebhook#region}

---

##### `scopeConfiguration`<sup>Optional</sup> <a name="scopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration"></a>

```java
public CodebuildWebhookScopeConfiguration getScopeConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}

---

### CodebuildWebhookFilterGroup <a name="CodebuildWebhookFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroup;

CodebuildWebhookFilterGroup.builder()
//  .filter(IResolvable)
//  .filter(java.util.List<CodebuildWebhookFilterGroupFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}

---

### CodebuildWebhookFilterGroupFilter <a name="CodebuildWebhookFilterGroupFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroupFilter;

CodebuildWebhookFilterGroupFilter.builder()
    .pattern(java.lang.String)
    .type(java.lang.String)
//  .excludeMatchedPattern(java.lang.Boolean)
//  .excludeMatchedPattern(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern">pattern</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}.

---

##### `excludeMatchedPattern`<sup>Optional</sup> <a name="excludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern"></a>

```java
public java.lang.Object getExcludeMatchedPattern();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}.

---

### CodebuildWebhookScopeConfiguration <a name="CodebuildWebhookScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookScopeConfiguration;

CodebuildWebhookScopeConfiguration.builder()
    .name(java.lang.String)
    .scope(java.lang.String)
//  .domain(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildWebhookFilterGroupFilterList <a name="CodebuildWebhookFilterGroupFilterList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroupFilterList;

new CodebuildWebhookFilterGroupFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get"></a>

```java
public CodebuildWebhookFilterGroupFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>>

---


### CodebuildWebhookFilterGroupFilterOutputReference <a name="CodebuildWebhookFilterGroupFilterOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroupFilterOutputReference;

new CodebuildWebhookFilterGroupFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern">resetExcludeMatchedPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeMatchedPattern` <a name="resetExcludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern"></a>

```java
public void resetExcludeMatchedPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput">excludeMatchedPatternInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludeMatchedPatternInput`<sup>Optional</sup> <a name="excludeMatchedPatternInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput"></a>

```java
public java.lang.Object getExcludeMatchedPatternInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `excludeMatchedPattern`<sup>Required</sup> <a name="excludeMatchedPattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern"></a>

```java
public java.lang.Object getExcludeMatchedPattern();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>

---


### CodebuildWebhookFilterGroupList <a name="CodebuildWebhookFilterGroupList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroupList;

new CodebuildWebhookFilterGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get"></a>

```java
public CodebuildWebhookFilterGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>>

---


### CodebuildWebhookFilterGroupOutputReference <a name="CodebuildWebhookFilterGroupOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookFilterGroupOutputReference;

new CodebuildWebhookFilterGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<CodebuildWebhookFilterGroupFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter"></a>

```java
public CodebuildWebhookFilterGroupFilterList getFilter();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>

---


### CodebuildWebhookScopeConfigurationOutputReference <a name="CodebuildWebhookScopeConfigurationOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.codebuild_webhook.CodebuildWebhookScopeConfigurationOutputReference;

new CodebuildWebhookScopeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain"></a>

```java
public void resetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue"></a>

```java
public CodebuildWebhookScopeConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---



