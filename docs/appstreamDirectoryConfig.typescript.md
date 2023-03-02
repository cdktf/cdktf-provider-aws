# `appstreamDirectoryConfig` Submodule <a name="`appstreamDirectoryConfig` Submodule" id="@cdktf/provider-aws.appstreamDirectoryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamDirectoryConfig <a name="AppstreamDirectoryConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config aws_appstream_directory_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

new appstreamDirectoryConfig.AppstreamDirectoryConfig(scope: Construct, id: string, config: AppstreamDirectoryConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig">AppstreamDirectoryConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials">putServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putServiceAccountCredentials` <a name="putServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials"></a>

```typescript
public putServiceAccountCredentials(value: AppstreamDirectoryConfigServiceAccountCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.putServiceAccountCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput">directoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput">organizationalUnitDistinguishedNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput">serviceAccountCredentialsInput</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference">AppstreamDirectoryConfigServiceAccountCredentialsOutputReference</a>

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNamesInput`<sup>Optional</sup> <a name="organizationalUnitDistinguishedNamesInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNamesInput"></a>

```typescript
public readonly organizationalUnitDistinguishedNamesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountCredentialsInput`<sup>Optional</sup> <a name="serviceAccountCredentialsInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.serviceAccountCredentialsInput"></a>

```typescript
public readonly serviceAccountCredentialsInput: AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.organizationalUnitDistinguishedNames"></a>

```typescript
public readonly organizationalUnitDistinguishedNames: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamDirectoryConfigConfig <a name="AppstreamDirectoryConfigConfig" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

const appstreamDirectoryConfigConfig: appstreamDirectoryConfig.AppstreamDirectoryConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName">directoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames">organizationalUnitDistinguishedNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials">serviceAccountCredentials</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | service_account_credentials block. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}.

---

##### `organizationalUnitDistinguishedNames`<sup>Required</sup> <a name="organizationalUnitDistinguishedNames" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.organizationalUnitDistinguishedNames"></a>

```typescript
public readonly organizationalUnitDistinguishedNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}.

---

##### `serviceAccountCredentials`<sup>Required</sup> <a name="serviceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.serviceAccountCredentials"></a>

```typescript
public readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

service_account_credentials block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#id AppstreamDirectoryConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AppstreamDirectoryConfigServiceAccountCredentials <a name="AppstreamDirectoryConfigServiceAccountCredentials" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

const appstreamDirectoryConfigServiceAccountCredentials: appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword">accountPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}. |

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}.

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials.property.accountPassword"></a>

```typescript
public readonly accountPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamDirectoryConfigServiceAccountCredentialsOutputReference <a name="AppstreamDirectoryConfigServiceAccountCredentialsOutputReference" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer"></a>

```typescript
import { appstreamDirectoryConfig } from '@cdktf/provider-aws'

new appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput">accountPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword">accountPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `accountPasswordInput`<sup>Optional</sup> <a name="accountPasswordInput" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPasswordInput"></a>

```typescript
public readonly accountPasswordInput: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `accountPassword`<sup>Required</sup> <a name="accountPassword" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.accountPassword"></a>

```typescript
public readonly accountPassword: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppstreamDirectoryConfigServiceAccountCredentials;
```

- *Type:* <a href="#@cdktf/provider-aws.appstreamDirectoryConfig.AppstreamDirectoryConfigServiceAccountCredentials">AppstreamDirectoryConfigServiceAccountCredentials</a>

---



