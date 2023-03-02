# `appconfigEnvironment` Submodule <a name="`appconfigEnvironment` Submodule" id="@cdktf/provider-aws.appconfigEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigEnvironment <a name="AppconfigEnvironment" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment aws_appconfig_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

new appconfigEnvironment.AppconfigEnvironment(scope: Construct, id: string, config: AppconfigEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor">putMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor">resetMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMonitor` <a name="putMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor"></a>

```typescript
public putMonitor(value: IResolvable | AppconfigEnvironmentMonitor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.putMonitor.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMonitor` <a name="resetMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetMonitor"></a>

```typescript
public resetMonitor(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

appconfigEnvironment.AppconfigEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

appconfigEnvironment.AppconfigEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

appconfigEnvironment.AppconfigEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor">monitor</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput">monitorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `monitor`<sup>Required</sup> <a name="monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitor"></a>

```typescript
public readonly monitor: AppconfigEnvironmentMonitorList;
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList">AppconfigEnvironmentMonitorList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `monitorInput`<sup>Optional</sup> <a name="monitorInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.monitorInput"></a>

```typescript
public readonly monitorInput: IResolvable | AppconfigEnvironmentMonitor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigEnvironmentConfig <a name="AppconfigEnvironmentConfig" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

const appconfigEnvironmentConfig: appconfigEnvironment.AppconfigEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor">monitor</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]</code> | monitor block. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#application_id AppconfigEnvironment#application_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#name AppconfigEnvironment#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#description AppconfigEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#id AppconfigEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `monitor`<sup>Optional</sup> <a name="monitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitor"></a>

```typescript
public readonly monitor: IResolvable | AppconfigEnvironmentMonitor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]

monitor block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#monitor AppconfigEnvironment#monitor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags AppconfigEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#tags_all AppconfigEnvironment#tags_all}.

---

### AppconfigEnvironmentMonitor <a name="AppconfigEnvironmentMonitor" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

const appconfigEnvironmentMonitor: appconfigEnvironment.AppconfigEnvironmentMonitor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn">alarmArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}. |

---

##### `alarmArn`<sup>Required</sup> <a name="alarmArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}.

---

##### `alarmRoleArn`<sup>Optional</sup> <a name="alarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigEnvironmentMonitorList <a name="AppconfigEnvironmentMonitorList" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

new appconfigEnvironment.AppconfigEnvironmentMonitorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get"></a>

```typescript
public get(index: number): AppconfigEnvironmentMonitorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigEnvironmentMonitor[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a>[]

---


### AppconfigEnvironmentMonitorOutputReference <a name="AppconfigEnvironmentMonitorOutputReference" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer"></a>

```typescript
import { appconfigEnvironment } from '@cdktf/provider-aws'

new appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn">resetAlarmRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlarmRoleArn` <a name="resetAlarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.resetAlarmRoleArn"></a>

```typescript
public resetAlarmRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput">alarmArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput">alarmRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn">alarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn">alarmRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmArnInput`<sup>Optional</sup> <a name="alarmArnInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArnInput"></a>

```typescript
public readonly alarmArnInput: string;
```

- *Type:* string

---

##### `alarmRoleArnInput`<sup>Optional</sup> <a name="alarmRoleArnInput" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArnInput"></a>

```typescript
public readonly alarmRoleArnInput: string;
```

- *Type:* string

---

##### `alarmArn`<sup>Required</sup> <a name="alarmArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmArn"></a>

```typescript
public readonly alarmArn: string;
```

- *Type:* string

---

##### `alarmRoleArn`<sup>Required</sup> <a name="alarmRoleArn" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.alarmRoleArn"></a>

```typescript
public readonly alarmRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppconfigEnvironmentMonitor | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.appconfigEnvironment.AppconfigEnvironmentMonitor">AppconfigEnvironmentMonitor</a> | cdktf.IResolvable

---



