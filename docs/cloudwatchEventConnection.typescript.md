# `cloudwatchEventConnection` Submodule <a name="`cloudwatchEventConnection` Submodule" id="@cdktf/provider-aws.cloudwatchEventConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventConnection <a name="CloudwatchEventConnection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection aws_cloudwatch_event_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnection(scope: Construct, id: string, config: CloudwatchEventConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig">CloudwatchEventConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig">CloudwatchEventConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters">putAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAuthParameters` <a name="putAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters"></a>

```typescript
public putAuthParameters(value: CloudwatchEventConnectionAuthParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

cloudwatchEventConnection.CloudwatchEventConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters">authParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput">authParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters"></a>

```typescript
public readonly authParameters: CloudwatchEventConnectionAuthParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput"></a>

```typescript
public readonly authorizationTypeInput: string;
```

- *Type:* string

---

##### `authParametersInput`<sup>Optional</sup> <a name="authParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput"></a>

```typescript
public readonly authParametersInput: CloudwatchEventConnectionAuthParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventConnectionAuthParameters <a name="CloudwatchEventConnectionAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParameters: cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | invocation_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | oauth block. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey"></a>

```typescript
public readonly apiKey: CloudwatchEventConnectionAuthParametersApiKey;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic"></a>

```typescript
public readonly basic: CloudwatchEventConnectionAuthParametersBasic;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}

---

##### `invocationHttpParameters`<sup>Optional</sup> <a name="invocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters"></a>

```typescript
public readonly invocationHttpParameters: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

invocation_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth"></a>

```typescript
public readonly oauth: CloudwatchEventConnectionAuthParametersOauth;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}

---

### CloudwatchEventConnectionAuthParametersApiKey <a name="CloudwatchEventConnectionAuthParametersApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersApiKey: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersBasic <a name="CloudwatchEventConnectionAuthParametersBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersBasic: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParameters <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersInvocationHttpParameters: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body">body</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString">queryString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]</code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body"></a>

```typescript
public readonly body: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header"></a>

```typescript
public readonly header: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString"></a>

```typescript
public readonly queryString: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersInvocationHttpParametersBody: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauth <a name="CloudwatchEventConnectionAuthParametersOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauth: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters">oauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | oauth_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | client_parameters block. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}.

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}.

---

##### `oauthHttpParameters`<sup>Required</sup> <a name="oauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters"></a>

```typescript
public readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

oauth_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}

---

##### `clientParameters`<sup>Optional</sup> <a name="clientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters"></a>

```typescript
public readonly clientParameters: CloudwatchEventConnectionAuthParametersOauthClientParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

client_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}

---

### CloudwatchEventConnectionAuthParametersOauthClientParameters <a name="CloudwatchEventConnectionAuthParametersOauthClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauthClientParameters: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauthOauthHttpParameters: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body">body</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString">queryString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]</code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body"></a>

```typescript
public readonly body: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header"></a>

```typescript
public readonly header: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString"></a>

```typescript
public readonly queryString: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString: cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `isValueSecret`<sup>Optional</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionConfig <a name="CloudwatchEventConnectionConfig" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

const cloudwatchEventConnectionConfig: cloudwatchEventConnection.CloudwatchEventConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType">authorizationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters">authParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `authParameters`<sup>Required</sup> <a name="authParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters"></a>

```typescript
public readonly authParameters: CloudwatchEventConnectionAuthParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventConnectionAuthParametersApiKeyOutputReference <a name="CloudwatchEventConnectionAuthParametersApiKeyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersApiKey;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---


### CloudwatchEventConnectionAuthParametersBasicOutputReference <a name="CloudwatchEventConnectionAuthParametersBasicOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersBasic;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody"></a>

```typescript
public putBody(value: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body"></a>

```typescript
public readonly body: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header"></a>

```typescript
public readonly header: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString"></a>

```typescript
public readonly queryString: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>[]

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>[]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauthClientParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody">putBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString">putQueryString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBody` <a name="putBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody"></a>

```typescript
public putBody(value: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]

---

##### `putHeader` <a name="putHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]

---

##### `putQueryString` <a name="putQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString"></a>

```typescript
public putQueryString(value: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString"></a>

```typescript
public resetQueryString(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString">queryString</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput">bodyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body"></a>

```typescript
public readonly body: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header"></a>

```typescript
public readonly header: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a>

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString"></a>

```typescript
public readonly queryString: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>[]

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>[]

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput"></a>

```typescript
public readonly queryStringInput: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get"></a>

```typescript
public get(index: number): CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>[]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret">resetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsValueSecret` <a name="resetIsValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```typescript
public resetIsValueSecret(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput">isValueSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret">isValueSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isValueSecretInput`<sup>Optional</sup> <a name="isValueSecretInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```typescript
public readonly isValueSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `isValueSecret`<sup>Required</sup> <a name="isValueSecret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```typescript
public readonly isValueSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a> | cdktf.IResolvable

---


### CloudwatchEventConnectionAuthParametersOauthOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters">putClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters">putOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters">resetClientParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientParameters` <a name="putClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters"></a>

```typescript
public putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `putOauthHttpParameters` <a name="putOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters"></a>

```typescript
public putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `resetClientParameters` <a name="resetClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters"></a>

```typescript
public resetClientParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters">clientParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters">oauthHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput">clientParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput">oauthHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientParameters`<sup>Required</sup> <a name="clientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters"></a>

```typescript
public readonly clientParameters: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a>

---

##### `oauthHttpParameters`<sup>Required</sup> <a name="oauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters"></a>

```typescript
public readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientParametersInput`<sup>Optional</sup> <a name="clientParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput"></a>

```typescript
public readonly clientParametersInput: CloudwatchEventConnectionAuthParametersOauthClientParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `oauthHttpParametersInput`<sup>Optional</sup> <a name="oauthHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput"></a>

```typescript
public readonly oauthHttpParametersInput: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParametersOauth;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---


### CloudwatchEventConnectionAuthParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer"></a>

```typescript
import { cloudwatchEventConnection } from '@cdktf/provider-aws'

new cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey">putApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic">putBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters">putInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth">putOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic">resetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters">resetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth">resetOauth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKey` <a name="putApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey"></a>

```typescript
public putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `putBasic` <a name="putBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic"></a>

```typescript
public putBasic(value: CloudwatchEventConnectionAuthParametersBasic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `putInvocationHttpParameters` <a name="putInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```typescript
public putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `putOauth` <a name="putOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth"></a>

```typescript
public putOauth(value: CloudwatchEventConnectionAuthParametersOauth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `resetApiKey` <a name="resetApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetBasic` <a name="resetBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic"></a>

```typescript
public resetBasic(): void
```

##### `resetInvocationHttpParameters` <a name="resetInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```typescript
public resetInvocationHttpParameters(): void
```

##### `resetOauth` <a name="resetOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth"></a>

```typescript
public resetOauth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey">apiKey</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocationHttpParameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput">basicInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">invocationHttpParametersInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput">oauthInput</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: CloudwatchEventConnectionAuthParametersApiKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a>

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic"></a>

```typescript
public readonly basic: CloudwatchEventConnectionAuthParametersBasicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a>

---

##### `invocationHttpParameters`<sup>Required</sup> <a name="invocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```typescript
public readonly invocationHttpParameters: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth"></a>

```typescript
public readonly oauth: CloudwatchEventConnectionAuthParametersOauthOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: CloudwatchEventConnectionAuthParametersApiKey;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `basicInput`<sup>Optional</sup> <a name="basicInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput"></a>

```typescript
public readonly basicInput: CloudwatchEventConnectionAuthParametersBasic;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `invocationHttpParametersInput`<sup>Optional</sup> <a name="invocationHttpParametersInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```typescript
public readonly invocationHttpParametersInput: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `oauthInput`<sup>Optional</sup> <a name="oauthInput" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput"></a>

```typescript
public readonly oauthInput: CloudwatchEventConnectionAuthParametersOauth;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudwatchEventConnectionAuthParameters;
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---



