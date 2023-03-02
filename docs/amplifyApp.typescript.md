# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktf/provider-aws.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktf/provider-aws.amplifyApp.AmplifyApp"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app aws_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyApp(scope: Construct, id: string, config: AmplifyAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">putAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule">putCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">resetAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns">resetAutoBranchCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials">resetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule">resetCustomRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation">resetEnableAutoBranchCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild">resetEnableBranchAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">resetEnableBranchAutoDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn">resetIamServiceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAutoBranchCreationConfig` <a name="putAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```typescript
public putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `putCustomRule` <a name="putCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule"></a>

```typescript
public putCustomRule(value: IResolvable | AmplifyAppCustomRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.putCustomRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]

---

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAutoBranchCreationConfig` <a name="resetAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```typescript
public resetAutoBranchCreationConfig(): void
```

##### `resetAutoBranchCreationPatterns` <a name="resetAutoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetAutoBranchCreationPatterns"></a>

```typescript
public resetAutoBranchCreationPatterns(): void
```

##### `resetBasicAuthCredentials` <a name="resetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBasicAuthCredentials"></a>

```typescript
public resetBasicAuthCredentials(): void
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```typescript
public resetBuildSpec(): void
```

##### `resetCustomRule` <a name="resetCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetCustomRule"></a>

```typescript
public resetCustomRule(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableAutoBranchCreation` <a name="resetEnableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableAutoBranchCreation"></a>

```typescript
public resetEnableAutoBranchCreation(): void
```

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetEnableBranchAutoBuild` <a name="resetEnableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoBuild"></a>

```typescript
public resetEnableBranchAutoBuild(): void
```

##### `resetEnableBranchAutoDeletion` <a name="resetEnableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```typescript
public resetEnableBranchAutoDeletion(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetIamServiceRoleArn` <a name="resetIamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetIamServiceRoleArn"></a>

```typescript
public resetIamServiceRoleArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

amplifyApp.AmplifyApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

amplifyApp.AmplifyApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

amplifyApp.AmplifyApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">autoBranchCreationConfig</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule">customRule</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch">productionBranch</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">autoBranchCreationConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput">autoBranchCreationPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput">basicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput">buildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput">customRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput">enableAutoBranchCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput">enableBranchAutoBuildInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">enableBranchAutoDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput">iamServiceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput">oauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns">autoBranchCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation">enableAutoBranchCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild">enableBranchAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">enableBranchAutoDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn">iamServiceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="autoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```typescript
public readonly autoBranchCreationConfig: AmplifyAppAutoBranchCreationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `customRule`<sup>Required</sup> <a name="customRule" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRule"></a>

```typescript
public readonly customRule: AmplifyAppCustomRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList">AmplifyAppCustomRuleList</a>

---

##### `defaultDomain`<sup>Required</sup> <a name="defaultDomain" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

---

##### `productionBranch`<sup>Required</sup> <a name="productionBranch" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.productionBranch"></a>

```typescript
public readonly productionBranch: AmplifyAppProductionBranchList;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList">AmplifyAppProductionBranchList</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `autoBranchCreationConfigInput`<sup>Optional</sup> <a name="autoBranchCreationConfigInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```typescript
public readonly autoBranchCreationConfigInput: AmplifyAppAutoBranchCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `autoBranchCreationPatternsInput`<sup>Optional</sup> <a name="autoBranchCreationPatternsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatternsInput"></a>

```typescript
public readonly autoBranchCreationPatternsInput: string[];
```

- *Type:* string[]

---

##### `basicAuthCredentialsInput`<sup>Optional</sup> <a name="basicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentialsInput"></a>

```typescript
public readonly basicAuthCredentialsInput: string;
```

- *Type:* string

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```typescript
public readonly buildSpecInput: string;
```

- *Type:* string

---

##### `customRuleInput`<sup>Optional</sup> <a name="customRuleInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.customRuleInput"></a>

```typescript
public readonly customRuleInput: IResolvable | AmplifyAppCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableAutoBranchCreationInput`<sup>Optional</sup> <a name="enableAutoBranchCreationInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreationInput"></a>

```typescript
public readonly enableAutoBranchCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBranchAutoBuildInput`<sup>Optional</sup> <a name="enableBranchAutoBuildInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuildInput"></a>

```typescript
public readonly enableBranchAutoBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBranchAutoDeletionInput`<sup>Optional</sup> <a name="enableBranchAutoDeletionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```typescript
public readonly enableBranchAutoDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamServiceRoleArnInput`<sup>Optional</sup> <a name="iamServiceRoleArnInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArnInput"></a>

```typescript
public readonly iamServiceRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="autoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.autoBranchCreationPatterns"></a>

```typescript
public readonly autoBranchCreationPatterns: string[];
```

- *Type:* string[]

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="enableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableAutoBranchCreation"></a>

```typescript
public readonly enableAutoBranchCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBranchAutoBuild`<sup>Required</sup> <a name="enableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoBuild"></a>

```typescript
public readonly enableBranchAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="enableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```typescript
public readonly enableBranchAutoDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `iamServiceRoleArn`<sup>Required</sup> <a name="iamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.iamServiceRoleArn"></a>

```typescript
public readonly iamServiceRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

const amplifyAppAutoBranchCreationConfig: amplifyApp.AmplifyAppAutoBranchCreationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">buildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}. |

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#framework AmplifyApp#framework}.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

const amplifyAppConfig: amplifyApp.AmplifyAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">autoBranchCreationConfig</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | auto_branch_creation_config block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns">autoBranchCreationPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec">buildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule">customRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]</code> | custom_rule block. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation">enableAutoBranchCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild">enableBranchAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">enableBranchAutoDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn">iamServiceRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken">oauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#name AmplifyApp#name}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#access_token AmplifyApp#access_token}.

---

##### `autoBranchCreationConfig`<sup>Optional</sup> <a name="autoBranchCreationConfig" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```typescript
public readonly autoBranchCreationConfig: AmplifyAppAutoBranchCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

auto_branch_creation_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}

---

##### `autoBranchCreationPatterns`<sup>Optional</sup> <a name="autoBranchCreationPatterns" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.autoBranchCreationPatterns"></a>

```typescript
public readonly autoBranchCreationPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `basicAuthCredentials`<sup>Optional</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#basic_auth_credentials AmplifyApp#basic_auth_credentials}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `customRule`<sup>Optional</sup> <a name="customRule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.customRule"></a>

```typescript
public readonly customRule: IResolvable | AmplifyAppCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]

custom_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#custom_rule AmplifyApp#custom_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#description AmplifyApp#description}.

---

##### `enableAutoBranchCreation`<sup>Optional</sup> <a name="enableAutoBranchCreation" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableAutoBranchCreation"></a>

```typescript
public readonly enableAutoBranchCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `enableBranchAutoBuild`<sup>Optional</sup> <a name="enableBranchAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoBuild"></a>

```typescript
public readonly enableBranchAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}.

---

##### `enableBranchAutoDeletion`<sup>Optional</sup> <a name="enableBranchAutoDeletion" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```typescript
public readonly enableBranchAutoDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iamServiceRoleArn`<sup>Optional</sup> <a name="iamServiceRoleArn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.iamServiceRoleArn"></a>

```typescript
public readonly iamServiceRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#iam_service_role_arn AmplifyApp#iam_service_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#id AmplifyApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags AmplifyApp#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.amplifyApp.AmplifyAppConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#tags_all AmplifyApp#tags_all}.

---

### AmplifyAppCustomRule <a name="AmplifyAppCustomRule" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

const amplifyAppCustomRule: amplifyApp.AmplifyAppCustomRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}. |

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#source AmplifyApp#source}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#target AmplifyApp#target}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#condition AmplifyApp#condition}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app#status AmplifyApp#status}.

---

### AmplifyAppProductionBranch <a name="AmplifyAppProductionBranch" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

const amplifyAppProductionBranch: amplifyApp.AmplifyAppProductionBranch = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials">resetBasicAuthCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">resetStage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasicAuthCredentials` <a name="resetBasicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthCredentials"></a>

```typescript
public resetBasicAuthCredentials(): void
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```typescript
public resetBuildSpec(): void
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```typescript
public resetEnableAutoBuild(): void
```

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```typescript
public resetEnablePerformanceMode(): void
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```typescript
public resetEnablePullRequestPreview(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFramework` <a name="resetFramework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```typescript
public resetFramework(): void
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```typescript
public resetPullRequestEnvironmentName(): void
```

##### `resetStage` <a name="resetStage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```typescript
public resetStage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput">basicAuthCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">buildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials">basicAuthCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuthCredentialsInput`<sup>Optional</sup> <a name="basicAuthCredentialsInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentialsInput"></a>

```typescript
public readonly basicAuthCredentialsInput: string;
```

- *Type:* string

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```typescript
public readonly buildSpecInput: string;
```

- *Type:* string

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```typescript
public readonly enableAutoBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```typescript
public readonly enablePerformanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```typescript
public readonly enablePullRequestPreviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```typescript
public readonly pullRequestEnvironmentNameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `basicAuthCredentials`<sup>Required</sup> <a name="basicAuthCredentials" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthCredentials"></a>

```typescript
public readonly basicAuthCredentials: string;
```

- *Type:* string

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmplifyAppAutoBranchCreationConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppCustomRuleList <a name="AmplifyAppCustomRuleList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyAppCustomRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get"></a>

```typescript
public get(index: number): AmplifyAppCustomRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppCustomRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a>[]

---


### AmplifyAppCustomRuleOutputReference <a name="AmplifyAppCustomRuleOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyAppCustomRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmplifyAppCustomRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppCustomRule">AmplifyAppCustomRule</a> | cdktf.IResolvable

---


### AmplifyAppProductionBranchList <a name="AmplifyAppProductionBranchList" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyAppProductionBranchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get"></a>

```typescript
public get(index: number): AmplifyAppProductionBranchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AmplifyAppProductionBranchOutputReference <a name="AmplifyAppProductionBranchOutputReference" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktf/provider-aws'

new amplifyApp.AmplifyAppProductionBranchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime">lastDeployTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `lastDeployTime`<sup>Required</sup> <a name="lastDeployTime" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.lastDeployTime"></a>

```typescript
public readonly lastDeployTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AmplifyAppProductionBranch;
```

- *Type:* <a href="#@cdktf/provider-aws.amplifyApp.AmplifyAppProductionBranch">AmplifyAppProductionBranch</a>

---



