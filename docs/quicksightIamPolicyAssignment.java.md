# `quicksightIamPolicyAssignment` Submodule <a name="`quicksightIamPolicyAssignment` Submodule" id="@cdktf/provider-aws.quicksightIamPolicyAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIamPolicyAssignment <a name="QuicksightIamPolicyAssignment" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignment;

QuicksightIamPolicyAssignment.Builder.create(Construct scope, java.lang.String id)
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
    .assignmentName(java.lang.String)
    .assignmentStatus(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .identities(IResolvable)
//  .identities(java.util.List<QuicksightIamPolicyAssignmentIdentities>)
//  .namespace(java.lang.String)
//  .policyArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentName">assignmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentStatus">assignmentStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.identities">identities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>></code> | identities block. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.policyArn">policyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentName`<sup>Required</sup> <a name="assignmentName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}.

---

##### `assignmentStatus`<sup>Required</sup> <a name="assignmentStatus" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.assignmentStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}.

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.identities"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>>

identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.Initializer.parameter.policyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities">putIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentities` <a name="putIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities"></a>

```java
public void putIdentities(IResolvable OR java.util.List<QuicksightIamPolicyAssignmentIdentities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.putIdentities.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.resetPolicyArn"></a>

```java
public void resetPolicyArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignment;

QuicksightIamPolicyAssignment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignment;

QuicksightIamPolicyAssignment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignment;

QuicksightIamPolicyAssignment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignment;

QuicksightIamPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightIamPolicyAssignment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightIamPolicyAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightIamPolicyAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIamPolicyAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId">assignmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities">identities</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput">assignmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput">assignmentStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput">identitiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput">policyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName">assignmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus">assignmentStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentId`<sup>Required</sup> <a name="assignmentId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentId"></a>

```java
public java.lang.String getAssignmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identities"></a>

```java
public QuicksightIamPolicyAssignmentIdentitiesList getIdentities();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList">QuicksightIamPolicyAssignmentIdentitiesList</a>

---

##### `assignmentNameInput`<sup>Optional</sup> <a name="assignmentNameInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentNameInput"></a>

```java
public java.lang.String getAssignmentNameInput();
```

- *Type:* java.lang.String

---

##### `assignmentStatusInput`<sup>Optional</sup> <a name="assignmentStatusInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatusInput"></a>

```java
public java.lang.String getAssignmentStatusInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.identitiesInput"></a>

```java
public java.lang.Object getIdentitiesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArnInput"></a>

```java
public java.lang.String getPolicyArnInput();
```

- *Type:* java.lang.String

---

##### `assignmentName`<sup>Required</sup> <a name="assignmentName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentName"></a>

```java
public java.lang.String getAssignmentName();
```

- *Type:* java.lang.String

---

##### `assignmentStatus`<sup>Required</sup> <a name="assignmentStatus" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.assignmentStatus"></a>

```java
public java.lang.String getAssignmentStatus();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIamPolicyAssignmentConfig <a name="QuicksightIamPolicyAssignmentConfig" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignmentConfig;

QuicksightIamPolicyAssignmentConfig.builder()
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
    .assignmentName(java.lang.String)
    .assignmentStatus(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .identities(IResolvable)
//  .identities(java.util.List<QuicksightIamPolicyAssignmentIdentities>)
//  .namespace(java.lang.String)
//  .policyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName">assignmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus">assignmentStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities">identities</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>></code> | identities block. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `assignmentName`<sup>Required</sup> <a name="assignmentName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentName"></a>

```java
public java.lang.String getAssignmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}.

---

##### `assignmentStatus`<sup>Required</sup> <a name="assignmentStatus" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.assignmentStatus"></a>

```java
public java.lang.String getAssignmentStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}.

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.identities"></a>

```java
public java.lang.Object getIdentities();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>>

identities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}.

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentConfig.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}.

---

### QuicksightIamPolicyAssignmentIdentities <a name="QuicksightIamPolicyAssignmentIdentities" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignmentIdentities;

QuicksightIamPolicyAssignmentIdentities.builder()
//  .group(java.util.List<java.lang.String>)
//  .user(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user">user</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}.

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities.property.user"></a>

```java
public java.util.List<java.lang.String> getUser();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightIamPolicyAssignmentIdentitiesList <a name="QuicksightIamPolicyAssignmentIdentitiesList" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignmentIdentitiesList;

new QuicksightIamPolicyAssignmentIdentitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get"></a>

```java
public QuicksightIamPolicyAssignmentIdentitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>>

---


### QuicksightIamPolicyAssignmentIdentitiesOutputReference <a name="QuicksightIamPolicyAssignmentIdentitiesOutputReference" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_iam_policy_assignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference;

new QuicksightIamPolicyAssignmentIdentitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput">groupInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput">userInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group">group</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user">user</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.groupInput"></a>

```java
public java.util.List<java.lang.String> getGroupInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.userInput"></a>

```java
public java.util.List<java.lang.String> getUserInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.group"></a>

```java
public java.util.List<java.lang.String> getGroup();
```

- *Type:* java.util.List<java.lang.String>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.user"></a>

```java
public java.util.List<java.lang.String> getUser();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentitiesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightIamPolicyAssignment.QuicksightIamPolicyAssignmentIdentities">QuicksightIamPolicyAssignmentIdentities</a>

---



