# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktf/provider-aws.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch aws_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktf/provider-aws'

new amplifyBranch.AmplifyBranch(scope: Construct, id: string, config: AmplifyBranchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn">resetBackendEnvironmentArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials">resetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification">resetEnableNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackendEnvironmentArn` <a name="resetBackendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBackendEnvironmentArn"></a>

```typescript
public resetBackendEnvironmentArn(): void
```

##### `resetBasicAuthCredentials` <a name="resetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetBasicAuthCredentials"></a>

```typescript
public resetBasicAuthCredentials(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```typescript
public resetEnableAutoBuild(): void
```

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetEnableNotification` <a name="resetEnableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnableNotification"></a>

```typescript
public resetEnableNotification(): void
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```typescript
public resetEnablePerformanceMode(): void
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```typescript
public resetEnablePullRequestPreview(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFramework` <a name="resetFramework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetFramework"></a>

```typescript
public resetFramework(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```typescript
public resetPullRequestEnvironmentName(): void
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetStage"></a>

```typescript
public resetStage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct"></a>

```typescript
import { amplifyBranch } from '@cdktf/provider-aws'

amplifyBranch.AmplifyBranch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```typescript
import { amplifyBranch } from '@cdktf/provider-aws'

amplifyBranch.AmplifyBranch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```typescript
import { amplifyBranch } from '@cdktf/provider-aws'

amplifyBranch.AmplifyBranch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources">associatedResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains">customDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch">destinationBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch">sourceBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput">backendEnvironmentArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput">basicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput">enableNotificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn">backendEnvironmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification">enableNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedResources`<sup>Required</sup> <a name="associatedResources" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.associatedResources"></a>

```typescript
public readonly associatedResources: string[];
```

- *Type:* string[]

---

##### `customDomains`<sup>Required</sup> <a name="customDomains" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.customDomains"></a>

```typescript
public readonly customDomains: string[];
```

- *Type:* string[]

---

##### `destinationBranch`<sup>Required</sup> <a name="destinationBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.destinationBranch"></a>

```typescript
public readonly destinationBranch: string;
```

- *Type:* string

---

##### `sourceBranch`<sup>Required</sup> <a name="sourceBranch" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.sourceBranch"></a>

```typescript
public readonly sourceBranch: string;
```

- *Type:* string

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `backendEnvironmentArnInput`<sup>Optional</sup> <a name="backendEnvironmentArnInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArnInput"></a>

```typescript
public readonly backendEnvironmentArnInput: string;
```

- *Type:* string

---

##### `basicAuthCredentialsInput`<sup>Optional</sup> <a name="basicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentialsInput"></a>

```typescript
public readonly basicAuthCredentialsInput: string;
```

- *Type:* string

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```typescript
public readonly enableAutoBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNotificationInput`<sup>Optional</sup> <a name="enableNotificationInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotificationInput"></a>

```typescript
public readonly enableNotificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```typescript
public readonly enablePerformanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```typescript
public readonly enablePullRequestPreviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```typescript
public readonly pullRequestEnvironmentNameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `backendEnvironmentArn`<sup>Required</sup> <a name="backendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.backendEnvironmentArn"></a>

```typescript
public readonly backendEnvironmentArn: string;
```

- *Type:* string

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableNotification`<sup>Required</sup> <a name="enableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enableNotification"></a>

```typescript
public readonly enableNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktf/provider-aws'

const amplifyBranchConfig: amplifyBranch.AmplifyBranchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn">backendEnvironmentArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification">enableNotification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}. |
| <code><a href="#@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl">ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backendEnvironmentArn`<sup>Optional</sup> <a name="backendEnvironmentArn" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.backendEnvironmentArn"></a>

```typescript
public readonly backendEnvironmentArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#backend_environment_arn AmplifyBranch#backend_environment_arn}.

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#basic_auth_credentials AmplifyBranch#basic_auth_credentials}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#description AmplifyBranch#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#display_name AmplifyBranch#display_name}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `enableNotification`<sup>Optional</sup> <a name="enableNotification" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enableNotification"></a>

```typescript
public readonly enableNotification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_notification AmplifyBranch#enable_notification}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#framework AmplifyBranch#framework}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#id AmplifyBranch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags AmplifyBranch#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#tags_all AmplifyBranch#tags_all}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.amplifyBranch.AmplifyBranchConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch#ttl AmplifyBranch#ttl}.

---



